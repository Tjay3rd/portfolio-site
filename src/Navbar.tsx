import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import minitheme from "./assets/minitheme.jpg";

const links = [
	{ to: "home", label: "Home" },
	{ to: "about", label: "About" },
	{ to: "services", label: "Services" },
	{ to: "portfolio", label: "Portfolio" },
	{ to: "contact", label: "Contact" },
];

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="home" smooth duration={500} className="flex cursor-pointer items-center gap-3">
					<img src={minitheme} alt="Tapiwa John logo" className="h-9 w-9 rounded-full object-cover" />
					<span className="font-display text-sm font-semibold tracking-tight">Tapiwa John</span>
				</Link>

				<ul className="hidden items-center gap-8 text-sm text-text-dim md:flex">
					{links.map((l) => (
						<li key={l.to}>
							<Link
								to={l.to}
								smooth
								duration={500}
								offset={-72}
								activeClass="text-text"
								spy
								className="cursor-pointer transition-colors
									hover:text-text"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>

				<Link
					to="contact"
					smooth
					duration={500}
					offset={-72}
					className="hidden cursor-pointer rounded-full bg-accent	px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright md:block"
				>
					Let's talk
				</Link>

				<button
					type="button"
					className="rounded-md p-2 text-text md:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-line bg-ink px-6 pb-6 md:hidden">
					<ul className="flex flex-col gap-4 pt-4 text-sm text-text-dim">
						{links.map((l) => (
							<li key={l.to}>
								<Link
									to={l.to}
									smooth
									duration={500}
									offset={-72}
									onClick={() => setOpen(false)}
									className="cursor-pointer transition-colors hover:text-text"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}

export default Navbar;
