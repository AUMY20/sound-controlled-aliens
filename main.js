function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifirer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z9s5EZM0w/model.json',model_loded);
}

function model_loded()
{
    classifirer.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
       console.log(results); 
       document.getElementById("sound").innerHTML = "I can hear: " + results[0].label;
       document.getElementById("confidence").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";

       img1 = document.getElementById("alien_clap");
       img2 = document.getElementById("alien_mouseclick");
       img3 = document.getElementById("alien_bgnoise");
       img4 = document.getElementById("alien_wistle");

       if (results[0].label =="Clap")
       {
           img1.src="aliens-01.gif";
           img2.src="aliens-02.png";
           img3.src="aliens-03.png";
           img4.src="aliens-04.png";
       }

       if (results[0].label =="mouse click")
       {
           img1.src="aliens-01.png";
           img2.src="aliens-02.gif";
           img3.src="aliens-03.png";
           img4.src="aliens-04.png";
       }

       if (results[0].label =="Background Noise")
       {
           img1.src="aliens-01.png";
           img2.src="aliens-02.png";
           img3.src="aliens-03.gif";
           img4.src="aliens-04.png";
       }
       
       if (results[0].label =="wistle")
       {
           img1.src="aliens-01.png";
           img2.src="aliens-02.png";
           img3.src="aliens-03.png";
           img4.src="aliens-04.gif";
       }
    }
}