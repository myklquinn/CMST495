var nC = document.querySelector(".nav-container")
var nL = document.querySelector(".nav-links")
var sB = document.querySelector(".submit-btn")
var cC = document.querySelector(".contact-container")
var mR = document.querySelector(".message-received")


navOpenClose = function( event ) {
	console.log(event.target)
	if (nC.style.maxHeight == "100vh") {
		nC.style.maxHeight = ""
		nL.style.maxHeight = ""
	} else if (event.target.className == "nav-menu") {
		if (nC.style.maxHeight == "100vh") {
			nC.style.maxHeight = ""
			nL.style.maxHeight = ""
		} else {
			nC.style.maxHeight = "100vh"
			nL.style.maxHeight = "100%"
		}	}
}

navOpen = function( event ) {
	nC.style.maxHeight = "100vh"
	nL.style.maxHeight = "100%"
}

navClose = function( event ) {
	nC.style.maxHeight = "100vh"
	nL.style.maxHeight = "100%"
}

submitForm = function() {
	moveHdr = cC.getBoundingClientRect().height
	mR.style.transition = "transform 150ms linear"
	mR.style.transform = "scale(1) translateY(-" + moveHdr + "px)";
	cC.style.transform = "translateY(-100%)";
	setTimeout((event) => { mR.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) }, 100);
}

document.querySelector("nav").addEventListener("click", navOpenClose , false);
sB.addEventListener("click", submitForm, false)