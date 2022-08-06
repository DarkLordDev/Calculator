const buttons = document.querySelectorAll(".col button");
const screen = document.getElementById("screen");
// console.log(buttons[1]);
for (const button of buttons) {
	button.addEventListener("mouseup", (e) => {
		const screenText = screen.innerText;
		console.log(e);
		if (screenText !== "Enter Something here") {
			screen.innerText = screen.innerText + e.target.id;
		} else {
			screen.innerText = e.target.id;
		}
	});
}
