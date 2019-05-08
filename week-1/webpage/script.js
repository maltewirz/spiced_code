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

        var menubox = document.getElementById("menubox");
        menubox.classList.remove("on");
    });
})();
