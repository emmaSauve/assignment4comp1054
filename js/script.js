document.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        document.querySelector(".desktopNav").classList.add("scrolledHeader");
    } else {
        document.querySelector(".desktopNav").classList.remove("scrolledHeader");
    }
});