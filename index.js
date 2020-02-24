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

function hideAllDropDown(){
    hideClassesDropDown();
}

function hideAllSections(){
    $('.section-content').fadeOut();
}

function showSection(sectionName){
    $('#' + sectionName).fadeIn();
}

// Manage Section Hide/Show Views
function toggleSectionsInit(){
    var sessionLinks = document.querySelectorAll('.section-link');
    
    // Add Listeners to All Links
    for(var i = 0; i < sessionLinks.length; i++){
        sessionLinks[i].addEventListener('click', function(e){
            e.stopPropagation();
            // Hide any open drop down menus
            hideAllDropDown();

            // Get Session Name from Selected Link
            var sectionName = e.target.dataset.section;

            // Hide All Sections
            hideAllSections();

            // Show Relevant Section
            showSection(sectionName);
        })
    }
}


//  Classes Drop Down Visibility
var classesIsVisible = false;   

window.onload = function(){

    // Setup Drop Down Menus
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

    // Setup Hamburger Menu Animation
    $( '.hamburger' ).click(function() {
		$('.hamburger').toggleClass('active', 5000);

	  	$('.mobile-menu').slideToggle( 'slow', function() {
	    	// Animation complete.
	  	});
	});

    // Close All Dropdowns on Irrelevant Window Click
    window.addEventListener('click', function(){
        hideClassesDropDown();
    });

    toggleSectionsInit();   
}