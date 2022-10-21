function switcher() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function openPlanet(planetName) {
    var i;
    var x = document.getElementsByClassName("planet");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(planetName).style.display = "block";
}
