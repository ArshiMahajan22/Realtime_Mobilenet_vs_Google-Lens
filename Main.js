var IMG1 = document.getElementById('IMG1');
var IMG2 = document.getElementById('IMG2');
var IMG3 = document.getElementById('IMG3');
var IMG4 = document.getElementById('IMG4');

function setup(){
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function draw(){
    classifier.classify(IMG1, gotResults1);
    classifier.classify(IMG2, gotResults2);
    classifier.classify(IMG3, gotResults3);
    classifier.classify(IMG4, gotResults4);
}

function gotResults1(error, results1){
    if(error){
        console.error(error);
    }
    else{
        console.log(results1);
        document.getElementById('test1').innerHTML = results1[0].label;
    }
}

function gotResults2(error, results2){
    if(error){
        console.error(error);
    }
    else{
        console.log(results2);
        document.getElementById('test2').innerHTML = results2[0].label;
    }
}

function gotResults3(error, results3){
    if(error){
        console.error(error);
    }
    else{
        console.log(results3);
        document.getElementById('test3').innerHTML = results3[0].label;
    }
}

function gotResults4(error, results4){
    if(error){
        console.error(error);
    }
    else{
        console.log(results4);
        document.getElementById('test4').innerHTML = results4[0].label;
    }
}