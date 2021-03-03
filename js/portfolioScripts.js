  //FUCTION TO OPEN SPECIFIC PROJECT DETAILS
jQuery(function () {
    hideProjectDetails();
    projectDetailsHandler();
    btnHideDetails();
    hideGallery();
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
}

function btnHideDetails (){
    $("button.details-close-btn").on("click", function(){
        $("div.project-details").fadeOut();
    })
}

function hideGallery(){
    $("#gallery-btn").on("click", function(){
        $("#gallery").slideToggle();
    })
}

function imageGalleryClick(){
    $("img.gallery-image").on("click", function(){
        let imgURL = this.getAttribute("src");
        $("#imageToView").attr("src", imgURL);
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


