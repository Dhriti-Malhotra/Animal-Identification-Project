function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jutzc0z_3/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)   {
        console.error(error);
    }
    else    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('cow');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('elephant');

        if (results[0].label == "Mooing") {
            img.src = 'Cow gif.gif';
            img1.src = 'Cat.jpg';
            img2.src = 'Dog.jpg';
            img3.src = 'Elephant.jpg';
        }
        else if (results[0].label == "Meowing")    {
            img.src = 'Cow.jpg';
            img1.src = 'Cat gif.gif';
            img2.src = 'Dog.jpg';
            img3.src = 'Elephant.jpg';
        }
        else if(results[0].label == "Barking")     {
            img.src = 'Cow.jpg';
            img1.src = 'Cat.jpg';
            img2.src = 'Dog gif.gif';
            img3.src = 'Elephant.jpg';
        }
        else    {
            img.src = 'Cow.jpg';
            img1.src = 'Cat.jpg';
            img2.src = 'Dog.jpg';
            img3.src = 'Elephant gif.gif';
        }
    }
}