import { Link } from "react-scroll";
import minitheme from "./assets/minitheme.jpg";

function Footer() {
	return (
		<footer className="bg-paper text-paper-ink">
			<div className="mx-auto max-w-6xl px-6 py-10">
				<div
					className="flex flex-col items-center gap-6
						border-t border-black/10 pt-8
						sm:flex-row sm:justify-between"
				>
					<Link
						to="home"
						smooth
						duration={500}
						className="flex cursor-pointer items-center
							gap-3"
					>
						<img src={minitheme} alt="Tapiwa John logo" className="h-8 w-8 rounded-full object-cover" />
						<span
							className="font-display text-sm
							font-semibold"
						>
							Tapiwa John
						</span>
					</Link>

					<p className="text-sm text-paper-dim">&copy; {new Date().getFullYear()} Tapiwa John. All rights reserved.</p>

					<div className="flex gap-6 text-sm text-paper-dim">
						<a href="#" className="hover:text-accent">
							GitHub
						</a>
						<a href="#" className="hover:text-accent">
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
