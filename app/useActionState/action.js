"use server";

export async function increment(prevState, formData) {
	const prev = prevState + 1;
	return prev;
}
