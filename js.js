var project1 = document.getElementById("project1");
var project1d = document.getElementById("project1d");
var project1visibility = 0;
var project2 = document.getElementById("project2");
var project2d = document.getElementById("project2d");
var project2visibility = 0;

project1.onclick = function(){
    if (project1visibility == 0){
        project1visibility = 1;
        project1d.style.display = 'inline-block';
    }
    else if (project1visibility == 1){
        project1visibility = 0;
        project1d.style.display = 'none';
    }
}
project2.onclick = function(){
    if (project2visibility == 0){
        project2visibility = 1;
        project2d.style.display = 'inline-block';
    }
    else if (project2visibility == 1){
        project2visibility = 0;
        project2d.style.display = 'none';
    }
}