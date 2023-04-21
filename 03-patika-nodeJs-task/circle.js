const PI =3.141592653;
function circleArea(radius){
    let circleArea=PI*Math.pow(radius,2);
    console.log(`Circle Area : ${circleArea.toFixed(1)}`);
}
function circleCircumference(radius){
    let circleCircumference=2*PI*radius;
    console.log(`Circle Circumference : ${circleCircumference.toFixed(1)}`);
}

module.export={
    circleArea,
    circleCircumference
}