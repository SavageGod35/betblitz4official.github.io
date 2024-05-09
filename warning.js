function toggleWarning() {
    var warningDiv = document.getElementById("warningMessage");
    if (warningDiv.style.display === "none") {
        warningDiv.style.display = "block";
    } else {
        warningDiv.style.display = "none";
    }
}