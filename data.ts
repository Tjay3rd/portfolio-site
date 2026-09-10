import mywork1 from "./src/assets/mywork1.jpg";
import mywork2 from "./src/assets/mywork2.jpg";
import mywork3 from "./src/assets/mywork3.jpg";
import mywork4 from "./src/assets/mywork4.jpg";
import mywork5 from "./src/assets/mywork5.jpg";
import mywork6 from "./src/assets/mywork6.jpg";

export interface Service {
	no: string;
	title: string;
	description: string;
}

export const services: Service[] = [
	{
		no: "01",
		title: "Web Development",
		description:
			"Building scalable web pages and single-page apps with frontend and backend technologies, from database to deployment.",
	},
	{
		no: "02",
		title: "Digital Marketing",
		description: "Helping small and medium businesses grow through targeted ad campaigns and social media strategy.",
	},
	{
		no: "03",
		title: "Graphic Design",
		description: "Designing clean, memorable logos and landing pages for business or personal brands.",
	},
];

export interface WorkItem {
	title: string;
	tag: string;
	image: string;
}

export const workItems: WorkItem[] = [
	{ title: "Project One", tag: "Web App", image: mywork1 },
	{ title: "Project Two", tag: "E-commerce", image: mywork2 },
	{ title: "Project Three", tag: "Landing Page", image: mywork3 },
	{ title: "Project Four", tag: "Dashboard", image: mywork4 },
	{ title: "Project Five", tag: "Branding", image: mywork5 },
	{ title: "Project Six", tag: "Mobile", image: mywork6 },
];
