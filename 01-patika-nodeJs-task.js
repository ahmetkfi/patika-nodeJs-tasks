const ARGUMENTS = process.argv.slice(2);

function circleArea(radius){
    const PI=3.141592653;
    let area=PI*Math.pow(radius,2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area.toFixed(1)}`);
}

circleArea(ARGUMENTS[0]);

