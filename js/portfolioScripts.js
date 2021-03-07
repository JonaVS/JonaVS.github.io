
//ON DOCUMENT READY FUNCTION.
jQuery(function () {
    loop()
    galleryImgclassLoader();
    hideProjectDetails();
    projectDetailsHandler();
    btnHideDetails();
    galleryToggler();
    imageGalleryClick();
    techBtnToggler();
})

//GLOBAL VARIABLES FOR ANIMATIONS WHILE SCROLLING//
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
//GLOBAL VARIABLES END/


//FUNCTION FOR OPENING SPECIFIC PROJECT DETAILS//
function projectDetailsHandler(){
    $("button.project-details-btn").on("click", function () {
        let targetFragments = this.id.split("-");
        let detailsTarget = targetFragments[0] + "-" + "details";
        hideProjectDetails();
        $(`#${detailsTarget}`).fadeIn();
        $("body,html").animate(
            {
                scrollTop: $(`#${detailsTarget}`).offset().top
            },
            100 //speed
        );
    })
}

//FUNCTION TO HIDE PROJECT DETAILS SECTION INFO FROM DOCUMENT IS READY FUCTION//
function hideProjectDetails() {
    $(".project-details").hide();
    $("#gallery").hide();
}

//FUNTION TO MANUALLY CLOSE SPECIFIC PROJECT DETAILS//
function btnHideDetails (){
    $("button.details-close-btn").on("click", function(){
        $("div.project-details").fadeOut();
    })
}

//FUNCTION TO SHOW/HIDE THE GALLERY FEATURE FROM PROJECT INFO (IF AVAILABLE)
function galleryToggler(){
    $("#gallery-btn").on("click", function(){
        $("#gallery").slideToggle();
    })
}

//FUNCTION THAT ADDS SOME CLASES FOR ANIMATION TO GALLERY IMAGES
function galleryImgclassLoader(){
    $(".gallery-image").addClass("img-gallery-animation show-on-scroll");
    elementsToShow = document.querySelectorAll('.show-on-scroll'); 
}


//FUNCTION THAT CONTROLS HOW THE IMAGE VIEWVER HANDLES SPECIFIC TYPES OF IMAGES (DIANA CAROLINA PROJECT)
function imageGalleryClick(){
    $("img.gallery-image").on("click", function(){
        let imgClicked = this;
        $("#imageToView").attr("src", imgClicked.getAttribute("src"));
        if ($(imgClicked).hasClass("phone-style")) {
            console.log("estoy dentro del if");
            $("#imageToView").attr("style", "transform: scale(.7, .7);");
        }
        else{
            $("#imageToView").attr("style", "transform: scale(1, 1);");
        }
        $("#staticBackdrop").modal('show');
        
    });
}

//FUNCTION TO CHANGE TECH KNOLEDGE BUTTON STYLES WHEN PRESSED
function techBtnToggler(){
    $("#techCardBtn").on("click", function(){
        if ($("#techCardBtn").html().match('Ver <i class=\"bi bi-eye\"><\/i>')) {
            $("#techCardBtn").html('Ocultar <i class=\"bi bi-eye-slash\"><\/i>');
        }
        else{
            $("#techCardBtn").html('Ver <i class=\"bi bi-eye\"><\/i>');
        } 
    });
}



//ANIMATE WHILE SCROLLING FUNCTIONS//
function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
  