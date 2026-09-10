import { ArrowUpRight } from "lucide-react";
import { services } from "../data";

function Services() {
	return (
		<section id="services" className="border-b border-line bg-surface/40">
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
				<h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">What I do</h2>
				<div className="mt-12 divide-y divide-line border-y border-line">
					{services.map((s) => (
						<div
							key={s.no}
							className="group flex flex-col gap-4 py-8 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-8 sm:px-4"
						>
							<span className="font-mono text-sm text-text-dim sm:w-10">{s.no}</span>
							<h3 className="font-display text-xl font-semibold text-text sm:w-64	sm:shrink-0">{s.title}</h3>
							<p className="max-w-xl text-sm leading-relaxed text-text-dim">{s.description}</p>
							<ArrowUpRight
								size={20}
								className="ml-auto hidden shrink-0 text-text-dim transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright sm:block"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
