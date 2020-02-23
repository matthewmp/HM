function showClassesDropDown(){
    
    var classesDropDown = document.querySelector('.classes-dropdown-wrapper');

    classesIsVisible = !classesIsVisible;
        classesDropDown.style.display = 'block';
        var top = 45;
        var x = 1;
        var interval = setInterval(function(){
            top--;
            classesDropDown.style.opacity = x/10 + '';
            classesDropDown.style.top = top + 'px';
            x++;
            if(x >= 11){
                clearInterval(interval)
            }
        }, 10);
}

function hideClassesDropDown(){
    var classesDropDown = document.querySelector('.classes-dropdown-wrapper');

    classesIsVisible = !classesIsVisible;
    
    classesDropDown.style.display = 'none'
    classesDropDown.style.opacity = '0'
}


//  Classes Drop Down Visibility
var classesIsVisible = false;   

window.onload = function(){

    var classesMenu = document.getElementsByClassName('classes-drop-down')[0];
    
    classesMenu.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!classesIsVisible && e.target.className === 'classes-drop-down'){
            showClassesDropDown();
        } else if(classesIsVisible && e.target.className === 'classes-drop-down'){
            hideClassesDropDown();
        }
    });

    window.addEventListener('click', function(){
        hideClassesDropDown();
    })
}