export async function action() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Hello");
			resolve("hi");
		}, 2000);
	});
}
