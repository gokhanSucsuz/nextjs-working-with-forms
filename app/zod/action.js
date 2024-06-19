"use server";

import { z } from "zod";

const formSchema = z
	.object({
		email: z.string().email("Please enter a valid email!"),
		password: z.string().min(8, "Please enter at least 8 character!"),
		rePassword: z.string().min(8, "Please enter at least 8 character!")
	})
	.refine((data) => data.password === data.rePassword, {
		message: "Your passwords don't match!"
	});

export const formAction = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");
	const rePassword = formData.get("rePassword");

	try {
		formSchema.parse({ email, password, rePassword });
	} catch (error) {
		return error.errors;
	}
};
