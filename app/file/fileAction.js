"use server";
export async function fileAction(formData) {
	const file = formData.get("file");
	console.log("file", file.type);
	return file.name;
}
