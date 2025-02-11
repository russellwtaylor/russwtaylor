"use client";

import Image from "next/image";

export default function Projects() {
	const projects = [
		{
			title: "Project One",
			description:
				"A brief description of Project One. This project involves building a web application using React and Node.js.",
			link: "https://github.com/yourprofile/project-one",
			image: "/images/project-one.png",
		},
		{
			title: "Project Two",
			description:
				"A brief description of Project Two. This project focuses on creating a mobile application using React Native.",
			link: "https://github.com/yourprofile/project-two",
			image: "/images/project-two.png",
		},
		{
			title: "Project Three",
			description:
				"A brief description of Project Three. This project is about developing a RESTful API with Express and MongoDB.",
			link: "https://github.com/yourprofile/project-three",
			image: "/images/project-three.png",
		},
		{
			title: "Project Four",
			description:
				"A brief description of Project Four. This project showcases a data visualization dashboard built with D3.js.",
			link: "https://github.com/yourprofile/project-four",
			image: "/images/project-four.png",
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-8 bg-black/75 p-4 rounded-lg">
					Projects
				</h1>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-black/75 p-6 rounded-lg shadow-lg"
						>
							<Image
								src={project.image}
								alt={project.title}
								className="w-full h-auto rounded-lg mb-4"
								width={500}
								height={300}
							/>
							<h2 className="text-2xl font-semibold mb-2">
								{project.title}
							</h2>
							<p className="mb-4">{project.description}</p>
							<a
								href={project.link}
								className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
