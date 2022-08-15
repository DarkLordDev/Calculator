const buttons = document.querySelectorAll(".col button");
const screen = document.getElementById("screen");
// console.log(buttons[1]);
for (const button of buttons) {
	button.addEventListener("mouseup", (e) => {
		// console.log(e);
		if (e.target.id === "=") {
			console.log(screen.innerText);
			const result = eval(screen.innerText);
			screen.innerText = result;
		} else if (e.target.id === "sqrt") {
			const result = Math.sqrt(screen.innerText);
			screen.innerText = result;
		} else if (e.target.id === "c") {
			screen.innerText = "Enter Something here";
		} else if (screen.innerText !== "Enter Something here") {
			screen.innerText = screen.innerText + e.target.id;
		} else {
			screen.innerText = e.target.id;
		}
	});
}
