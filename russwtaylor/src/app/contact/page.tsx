"use client";

import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emailError, setEmailError] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const [toastStatus, setToastStatus] = useState<"success" | "error" | null>(
		null
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			setEmailError("Please enter a valid email address.");
			setToastMessage("Please enter a valid email address.");
			setToastStatus("error");
			return;
		} else {
			setEmailError("");
		}

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			// Clear the form fields after successful submission
			setName("");
			setEmail("");
			setMessage("");

			// Show success toast
			setToastMessage("Your message has been sent successfully!");
			setToastStatus("success");
		} catch (error) {
			setToastMessage(
				error instanceof Error
					? error.message
					: "Failed to send message. Please try again later."
			);
			setToastStatus("error");
		}

		setTimeout(() => {
			setToastMessage("");
			setToastStatus(null);
		}, 3000);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-8 bg-black/75 p-4 rounded-lg">
					Contact Me
				</h1>

				{toastMessage && (
					<div
						className={`${
							toastStatus === "success"
								? "bg-green-500"
								: "bg-red-500"
						} text-white p-4 rounded-lg mb-4 transition-all duration-300`}
					>
						{toastMessage}
					</div>
				)}

				<div className="mb-12 bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">
						Get in Touch
					</h2>
					<p className="mb-4">
						I would love to hear from you! Whether you have a
						question, want to discuss a project, or just want to say
						hello, feel free to reach out using the form below.
					</p>
				</div>

				<div className="mb-12 bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">
						Contact Form
					</h2>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-300"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="mt-1 block w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md focus:outline-none focus:ring focus:ring-neutral-500"
								placeholder="Your Name"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-300"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md focus:outline-none focus:ring focus:ring-neutral-500"
								placeholder="Your Email"
								required
							/>
							{emailError && (
								<p className="text-red-500 text-sm mt-1">
									{emailError}
								</p>
							)}
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-300"
							>
								Message
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="mt-1 block w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md focus:outline-none focus:ring focus:ring-neutral-500"
								placeholder="Your Message"
								rows={4}
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded-lg transition-colors"
						>
							Send Message
						</button>
					</form>
				</div>

				<div className="mb-12 bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
					<p className="mb-4">
						You can also connect with me on social media:
					</p>
					<ul className="space-y-2">
						<li>
							<a
								href="https://www.salesforce.com/trailblazer/russelltaylor"
								className="text-blue-400 hover:underline"
							>
								Salesforce Trailhead
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/russelltaylor812/"
								className="text-blue-400 hover:underline"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://github.com/russellwtaylor"
								className="text-blue-400 hover:underline"
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
