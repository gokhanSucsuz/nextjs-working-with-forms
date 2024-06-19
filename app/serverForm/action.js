"use server";
export const serverAction = async (formData) => {
	console.log(formData);
	formData.set("name", "111111");
	//formData.set("email", "0000");
	const email = formData.get("email");
	const password = formData.get("password");
	const repeatPassword = formData.get("repeatPassword");
	const terms = formData.get("terms");
	formData.append("name", "*******");
	formData.set("newKey", "12345");
	const newKey = formData.get("newKey");

	const name = formData.getAll("name");
	// console.log(email, password, repeatPassword, terms, newKey, name);
	// console.log("formData keys");
	for (const key of formData.keys()) {
		// console.log(key);
	}

	// console.log("formData values");
	for (const value of formData.values()) {
		// console.log(value);
	}
	// console.log("formData entries");
	for (const entry of formData.entries()) {
		// console.log(entry);
		// console.log(entry[0], entry[1]);
	}

	const errorObj = {
		email: email === "",
		password: password === "",
		repeatPassword: repeatPassword === "",
		success: false,
		match: password !== repeatPassword
	};

	if (Object.values(errorObj).includes(true)) {
		return errorObj;
	}
};
