var classesMenu = document.getElementsByClassName('classes-drop-down')[0];

var visible = false;

classesMenu.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    if(!visible && e.target.className === 'classes-drop-down'){
        visible = !visible;
        e.target.children[1].style.display = 'block';
        var top = 45;
        var x = 1;
        var interval = setInterval(function(){
            top--;
            e.target.children[1].style.opacity = x/10 + '';
            e.target.children[1].style.top = top + 'px';
            x++;
            if(x >= 11){
                clearInterval(interval)
            }
        }, 10);
    } else if(visible && e.target.className === 'classes-drop-down'){
        visible = !visible;
        e.target.children[1].style.display = 'none'
        e.target.children[1].style.opacity = '0'
    }
    
}, {passive: false})

// classesMenu.addEventListener('mouseout', function(e){
//     console.log(e.target.children[1]);
//     try{
//         e.target.children[1].style.display = 'none'
//         e.target.children[1].style.opacity = '0'
//     }
//     catch(err){
//         //
//     }
    
// })
