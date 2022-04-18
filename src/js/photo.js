const card = document.querySelector(".container__photo");
const THRESHOLD = 4;

function handleHover(e) {
	const { clientX, clientY, currentTarget } = e;
  	const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
	const horizontal = (clientX - offsetLeft) / clientWidth;
  	const vertical = (clientY - offsetTop) / clientHeight;
	const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  	const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
	const reflectPower = vertical > 0.5 ? vertical - 0.5 : 0;
	const reflectLeft = horizontal * 100;
	const reflectTop = vertical * 100;
	
	card.style.transform =
		`perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
	
	card.style.setProperty("--reflect-power", reflectPower);
	card.style.setProperty("--reflect-left", `${reflectLeft}%`);
	card.style.setProperty("--reflect-top", `${reflectTop}%`);
	
}

function resetStyles(e) {
	card.style.transform =
		`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
	
	card.style.setProperty("--reflect-power", 0);
}

card.addEventListener("mousemove", handleHover);
card.addEventListener("mouseleave", resetStyles);