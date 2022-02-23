function startClasssification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9bjfZSGFh/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("Model Ready")
    if (error) {
       console.error(error)
    }
    else{
        console.log(results)

        r = Math.floor(Math.random() * 255) + 1
        g = Math.floor(Math.random() * 255) + 1
        b = Math.floor(Math.random() * 255) + 1

        accuracy = (results[0].confidence*100).toFixed(2)
        label = results[0].label

        result_lbl = document.getElementById("result_lbl")
        result_confidence_lbl = document.getElementById("result_confidence")
        img = document.getElementById("img_change")

        result_lbl.style.color = "rgb("+r+","+g+","+b+")"
        result_confidence_lbl.style.color = "rgb("+r+","+g+","+b+")"

        result_lbl.innerHTML = "I can hear: "+label;
        result_confidence_lbl.innerHTML = "Accuracy: "+accuracy+" %";

        if(label == "Meow"){
            img.src = "Orange_cat_cartoon.png"
        }
        else if(label == "Dog Bark"){
            img.src = "Dog_Cartoon.webp"
        }
        else{
            img.src = "Ear_Sound.png"
        }

    }
}