function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    var bars = document.querySelectorAll(".bar");

    menu.classList.toggle("show-menu");

    // Toggle hamburger icon to X icon
    bars.forEach(bar => {
        bar.classList.toggle("change");
    });
}

