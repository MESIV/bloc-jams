// write a function named forEach 
//  function forEach (random, parameters) {}

// use a loop that goes through all elements in the points array 
//  for (var i = 0; i < ?.length; i++) {}
//  points[index].style.opacity = 1;
//  points[index].style.transform = "scaleX(1) translateY(0)";
//  points[index].style.msTransform = "scaleX(1) translateY(0)";
//  points[index].style.WebkitTransform = "scaleX(1) translateY(0)";

// execute a callback for each element
//  callback(!) at some index


// Replace the for loop in the animatePoints function with a forEach block and confirm that the selling points still animate properly

function forEach (awesome, callback) {
    for (var i = 0; i < awesome.length; i++) {
        callback(awesome[i]);
    }
}