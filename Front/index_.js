const Stop = document.getElementsByClassName("stop")[0];
const indexExercise = document.getElementsByClassName("index_exercise")[0];

Stop.addEventListener('mouseup', function(){
    Stop.classList.toggle("go");
    indexExercise.classList.toggle("stop");
})