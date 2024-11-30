var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementsByClassName("skills")[0];
toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
