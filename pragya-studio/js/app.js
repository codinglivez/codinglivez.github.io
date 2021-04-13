const container = document.querySelector(".hover-effect");
const card = document.querySelector(".crd");
const brush = document.querySelector(".brush");
const brushbg = document.querySelector(".brushbg");

container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
	card.style.transition = "none";
	brush.style.transform = "translateZ(80px)";
	brushbg.style.transform = "translateZ(20px)";
});

container.addEventListener('mouseleave', (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	brush.style.transform = "translateZ(0px)";
	brushbg.style.transform = "translateZ(0px)";
});