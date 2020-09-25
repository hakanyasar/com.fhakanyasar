
// night mode

function darkModeFunction() {

    /*console.log(document.querySelector("a").style.color);*/

    if (document.querySelector("a").style.color == "rgb(189, 189, 189)") {
        console.log("donguye girdi..");
        var y = document.querySelectorAll("li, a");
        y.forEach(function (el) {
            el.style.color = "black";
        })

        var element = document.getElementById("main");
        var element2 = document.getElementById("nav");

        element.classList.toggle("dark-mode");
        element2.classList.toggle("dark-mode");

    } else {

        var element = document.getElementById("main");
        var element2 = document.getElementById("nav");

        element.classList.toggle("dark-mode");
        element2.classList.toggle("dark-mode");

        var x = document.querySelectorAll("li, a");
        x.forEach(function (el) {
            el.style.color = "#bdbdbd";
        })
    }
}