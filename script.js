const buttons = document.querySelectorAll(".col button");
const screen = document.getElementById("screen");

for (const button of buttons) {
	button.addEventListener("mouseup", (e) => {
		if (e.target.id === "=") {
			const result = eval(screen.innerText);
			screen.innerText = result;
		} else if (e.target.id === "sqrt") {
			const result = Math.sqrt(screen.innerText);
			screen.innerText = result;
		} else if (e.target.id === "π") {
			screen.innerText = !(screen.innerText === "Enter Something here")
				? screen.innerText + Math.PI
				: Math.PI;
		} else if (e.target.id === "c") {
			screen.innerText = "Enter Something here";
		} else if (screen.innerText !== "Enter Something here") {
			screen.innerText = screen.innerText + e.target.id;
		} else {
			screen.innerText = e.target.id;
		}
	});
}
