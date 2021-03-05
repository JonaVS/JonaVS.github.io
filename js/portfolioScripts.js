  //FUCTION TO OPEN SPECIFIC PROJECT DETAILS
jQuery(function () {
    hideProjectDetails();
    projectDetailsHandler();
    btnHideDetails();
    galleryToggler();
    imageGalleryClick();
    techBtnToggler();
})

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

function hideProjectDetails() {
    $(".project-details").hide();
    $("#gallery").hide();
}

function btnHideDetails (){
    $("button.details-close-btn").on("click", function(){
        $("div.project-details").fadeOut();
    })
}

function galleryToggler(){
    $("#gallery-btn").on("click", function(){
        $("#gallery").slideToggle();
    })
}

function imageGalleryClick(){
    $("img.gallery-image").on("click", function(){
        //let imgURL = this.getAttribute("src");
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

function smoothScroll () {
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
}

