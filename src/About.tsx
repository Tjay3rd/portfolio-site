import { Link } from "react-scroll";
import profyl from "./assets/profyl.jpg";

const skills = [
	{ label: "JavaScript, HTML & CSS", level: 85 },
	{ label: "React", level: 90 },
	{ label: "Express", level: 80 },
	{ label: "MongoDB & SQL", level: 75 },
];

const milestones = [
	{ value: "2+", label: "Years of experience" },
	{ value: "7+", label: "Projects completed" },
	{ value: "5+", label: "Happy clients" },
];

function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl border-b border-line px-6 py-20 md:py-28">
			<h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">About me</h2>
			<div className="mt-12 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
				<img
					src={profyl}
					alt="Tapiwa John at work"
					className="w-full rounded-2xl border border-line object-cover shadow-lg shadow-black/30	md:max-w-xs"
				/>
				<div>
					<p className="max-w-xl leading-relaxed text-text-dim">
						I'm an upcoming full-stack web developer with strong proficiency in the MERN stack, plus working knowledge
						of PHP and Python. I'm also moderately experienced in WordPress development and digital marketing tools like
						SEO and PPC ad campaigns.
					</p>
					<p className="mt-4 max-w-xl leading-relaxed text-text-dim">
						You'll find some of the projects I've had the pleasure of working on{" "}
						<Link
							to="portfolio"
							smooth
							duration={500}
							offset={-72}
							className="cursor-pointer font-medium text-accent-bright underline underline-offset-4"
						>
							here
						</Link>
						.
					</p>

					<div className="mt-10 flex flex-col gap-5">
						{skills.map((s) => (
							<div key={s.label}>
								<div className="mb-2 flex items-center justify-between text-sm">
									<span className="font-medium text-text">{s.label}</span>
									<span className="font-mono text-xs text-text-dim">{s.level}%</span>
								</div>
								<div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
									<div
										className="h-full rounded-full bg-linear-to-r from-accent to-accent-bright"
										style={{ width: `${s.level}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<dl className="mt-16 grid grid-cols-1 divide-y divide-line rounded-2xl border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
				{milestones.map((m) => (
					<div key={m.label} className="px-6 py-8 text-center">
						<dt className="sr-only">{m.label}</dt>
						<dd className="font-display text-4xl font-semibold text-accent-bright sm:text-5xl">{m.value}</dd>
						<p className="mt-2 text-sm text-text-dim">{m.label}</p>
					</div>
				))}
			</dl>
		</section>
	);
}

export default About;
