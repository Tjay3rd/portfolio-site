import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import profile from "./assets/profile.jpg";

function Hero() {
	return (
		<section id="home" className="relative overflow-hidden border-b border-line">
			<div className="pointer-events-none absolute inset-0	bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[28px_28px]" />
			<div className="relative mx-auto grid max-w-6xl gap-14 px-6	py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
				<div>
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-text-dim">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full	animate-ping rounded-full bg-accent-bright opacity-75" />
							<span className="relative inline-flex h-2 w-2	rounded-full bg-accent-bright" />
						</span>
						Available for remote work
					</div>

					<h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
						Tapiwa John builds
						<br />
						full&#8209;stack products
						<br />
						with the MERN stack.
					</h1>

					<p className="mt-6 max-w-md text-base leading-relaxed text-text-dim">
						Self-taught developer based in Mutare, Zimbabwe, focused on AI-integrated web applications and clean,
						production-ready code.
					</p>

					<div className="mt-9 flex flex-wrap items-center gap-4">
						<Link
							to="contact"
							smooth
							duration={500}
							offset={-72}
							className="group inline-flex cursor-pointer	items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
						>
							Connect with me
							<ArrowRight size={16} className="transition-transform	group-hover:translate-x-0.5" />
						</Link>
						<a
							href="/resume.pdf"
							className="rounded-full border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent-bright hover:text-accent-bright"
						>
							My resume
						</a>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-sm">
					<div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-accent/30 to-transparent blur-2xl" />
					<div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-2">
						<img src={profile} alt="Portrait of Tapiwa John" className="aspect-4/5 w-full rounded-2xl object-cover" />
					</div>
					<div className="absolute -bottom-5 -left-5 rounded-xl border border-line bg-surface-2 px-4 py-3 font-mono text-xs text-text-dim shadow-lg							shadow-black/40">
						<span className="text-accent-bright">const</span> stack ={" "}
						<span className="text-text">["React", "Node", "Mongo"]</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
