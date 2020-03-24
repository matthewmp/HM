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
    $(classesDropDown).removeClass('fadeIn');
}

function hideAllDropDown(){
    hideClassesDropDown();
}

function hideAllSections(){
    $('.section-content').fadeOut();
}

function showSection(sectionName){
    hideAllSections();
    
    if(sectionName){
        $('#' + sectionName).fadeIn();
    } else {
        $('#home').fadeIn();
    }
    
}

function changeHashLocation(sectionName) {
    window.location.hash = sectionName;
}

// ================ Manage Section Hide/Show Views
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

            // Show Relevant Section
            changeHashLocation(sectionName);

            var mobileMenu = document.getElementsByClassName('mobile-menu')[0];
            mobileMenu.classList.remove('active');
            $('.hamburger')[0].classList.remove('active');
        })
    }
}

// Remove active mobile nav classes on window resize greater than 768
function makeMobileMenuInactive(){
    window.addEventListener('resize', function(e){
        if(window.innerWidth >= 768){
            $('.hamburger').removeClass('active');
            $('.mobile-menu').removeClass('active');
        }
    })
}

window.onload = function(){

    // Setup Drop Down Menus
    var classesMenu = document.getElementsByClassName('classes-drop-down')[0];
    
    classesMenu.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.target.className === 'classes-drop-down'){
            // showClassesDropDown();
            $('.classes-dropdown-wrapper').toggleClass('fadeIn')
        }
    });

    // Setup Hamburger Menu Animation
    $( '.hamburger' ).click(function() {
		$('.hamburger').toggleClass('active', 5000);

	  	$('.mobile-menu').toggleClass('active', 5000);
    });
    
    makeMobileMenuInactive();

    // Close All Dropdowns on Irrelevant Window Click
    window.addEventListener('click', function(){
        hideClassesDropDown();
    });

    /* Mobile Sub Menu Functions */
    function toggleMobileClassesSubMenu(){
        var mClassesSub = document.getElementsByClassName('mobile-classes-dropdown-wrapper')[0];
        if(mClassesSub.style.display === 'block'){
            $(mClassesSub).fadeOut();
        } else {
            $(mClassesSub).fadeIn();
        }
    }

    function mobileMenuEvents(){
        var mClasses = document.getElementById('mobile-menu-item-classes');
        mClasses.addEventListener('click', function(e){
            toggleMobileClassesSubMenu();
        })
    }


    toggleSectionsInit();   
    mobileMenuEvents();

    window.addEventListener('hashchange', function(e){
        var sectionName = window.location.hash.replace('#', '');

        // Hide All Sections
        hideAllSections();

        showSection(sectionName);
    })

    var spinner = document.getElementById('spinner');
    $(spinner).fadeOut();
}