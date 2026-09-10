import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus("sending");
		const form = event.currentTarget;
		const formData = new FormData(form);
		formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
			if (data.success) {
				setStatus("sent");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="bg-paper text-paper-ink">
			<div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
				<div>
					<h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Let's talk</h2>
					<p className="mt-4 max-w-sm leading-relaxed	text-paper-dim">
						I'm currently available for new projects — send me a message about anything you'd like me to work on.
					</p>
					<ul className="mt-10 flex flex-col gap-5">
						<li className="flex items-center gap-3">
							<Mail size={18} className="text-accent" />
							<a href="mailto:teejayn333@gmail.com" className="hover:text-accent">
								{" "}
								teejayn333@gmail.com{" "}
							</a>
						</li>
						<li className="flex items-center gap-3">
							<Phone size={18} className="text-accent" />
							<a href="tel:+263784277592" className="hover:text-accent">
								{" "}
								+263 784 277 592{" "}
							</a>
						</li>
						<li className="flex items-center gap-3">
							<MapPin size={18} className="text-accent" />
							<span>Harare, Zimbabwe</span>
						</li>
					</ul>
				</div>

				<form onSubmit={onSubmit} className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-sm font-medium">
							{" "}
							Your name{" "}
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							placeholder="Jane Doe"
							className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-paper-ink outline-none placeholder:text-paper-dim/60 focus:border-accent"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-sm font-medium">
							Your email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="jane@example.com"
							className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-paper-ink outline-none placeholder:text-paper-dim/60
								focus:border-accent"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="text-sm font-medium">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={4}
							placeholder="Tell me about your project"
							className="resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-paper-ink outline-none placeholder:text-paper-dim/60
								focus:border-accent"
						/>
					</div>
					<button
						type="submit"
						disabled={status === "sending"}
						className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white	 transition-colors hover:bg-accent-bright						disabled:opacity-60"
					>
						{status === "sending" ? "Sending…" : "Submit"}
					</button>
					{status === "sent" && <p className="text-sm text-emerald-700">Message sent — I'll get back to you soon.</p>}
					{status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
				</form>
			</div>
		</section>
	);
}

export default Contact;
