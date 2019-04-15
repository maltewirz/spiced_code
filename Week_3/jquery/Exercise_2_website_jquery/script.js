(function() {
    //listening to click on menu icon
    var menu = document.getElementById("menu");
    var closeMenuX = document.getElementById("closeMenuX");
    var overlay = document.getElementById("menu-overlay");

    //click on hamburger menu
    menu.addEventListener("click", function() {
        var menubox = document.getElementById("menubox");
        menubox.classList.add("on");

        var overlay = document.getElementById("menu-overlay");
        overlay.classList.add("on");
    });

    //click on X to close menu
    closeMenuX.addEventListener("click", function() {
        var menubox = document.getElementById("menubox");
        menubox.classList.remove("on");

        var overlay = document.getElementById("menu-overlay");
        overlay.classList.remove("on");
    });

    //click on overlay to close it
    overlay.addEventListener("click", function() {
        overlay.classList.remove("on");
        $(".popup-content").removeClass("active");

        var menubox = document.getElementById("menubox");
        menubox.classList.remove("on");
    });

    // New stuff from Exercise 2 jquery
    //this adds the class after 1 second
    setTimeout(function() {
        $(".popup-content").addClass("active");
        $("#menu-overlay").addClass("on");
    }, 1000);
    //this removes class on mouseclick
    $("#closePopupX").on("mousedown", function() {
        $(".popup-content").removeClass("active");
        $("#menu-overlay").removeClass("on");
    });

    //improvement for future: deny clicking on overlay and forcing to click on X.
})();
