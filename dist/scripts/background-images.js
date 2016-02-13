$(document).ready(function(){
    var classCycle=['imageCycle1','imageCycle2', 'imageCycle3', 'imageCycle4','imageCycle5', 'imageCycle6', 'imageCycle7', 'imageCycle8'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);

});