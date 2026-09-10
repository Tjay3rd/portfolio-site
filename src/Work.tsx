import { workItems } from "../data";

function Work() {
	return (
		<section id="portfolio" className="border-b border-line">
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
				<div className="flex flex-wrap items-end justify-between gap-4">
					<h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Recent work</h2>
					<a href="#" className="text-sm font-medium text-accent-bright underline underline-offset-4">
						View all projects
					</a>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{workItems.map((w) => (
						<a key={w.title} href="#" className="group relative block overflow-hidden rounded-2xl border border-line">
							<img
								src={w.image}
								alt={`${w.title} — ${w.tag}`}
								className="aspect-4/3 w-full object-cover transition-transform duration-300 group hover:scale-105"
							/>
							<div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-ink/90 via-ink/10 to-transparent p-5 opacity-0 transition opacity duration-300 group-hover:opacity-100">
								<span className="font-mono text-xs text-accent-bright">{w.tag}</span>
								<span className="mt-1 font-display text-lg font-semibold text-white">{w.title}</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Work;
