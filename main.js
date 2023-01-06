
const subButton = document.getElementById("submit-btn");
const thanksCont = document.getElementById("thanks");
const rateCont = document.getElementById("rateCont");
const rated = document.getElementsByClassName("rated");

subButton.addEventListener("click", revealThanks);

function revealThanks() {
    // alert("sub");
    // console.log(thanksCont);
    // rateCont.style.display = "none";
    thanksCont.style.display = "block";

};

