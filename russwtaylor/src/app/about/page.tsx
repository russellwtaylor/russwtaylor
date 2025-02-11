export default function About() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-8 bg-black/75 p-4 rounded-lg">
					About Me
				</h1>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<div className="md:col-span-2 bg-black/75 p-6 rounded-lg">
						<h2 className="text-2xl font-semibold mb-4">
							Hello, I&apos;m Russell Taylor
						</h2>
						<p className="mb-4">
							I&apos;m a passionate software developer with over 8
							years of experience building web applications and
							solving complex problems. My journey in technology
							began when I first discovered programming in
							college, and I&apos;ve been hooked ever since.
						</p>
						<p className="mb-4">
							Currently, I&apos;m focused on full-stack
							development using modern technologies like React,
							Next.js, and Node.js. I love creating efficient,
							scalable solutions that make a real impact.
						</p>
					</div>
					<div className="md:col-span-1">
						<div className="rounded-lg overflow-hidden shadow-lg bg-black/75 p-2">
							<img
								src="/images/profile-pic.png"
								alt="Russell Taylor Profile Picture"
								className="w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</div>

				<div className="mb-12 bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-6">
						Skills & Expertise
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{skills.map((skill, index) => (
							<div
								key={index}
								className="bg-neutral-800/80 p-4 rounded-lg text-center hover:bg-neutral-700 transition-colors"
							>
								{skill}
							</div>
						))}
					</div>
				</div>

				<div className="mb-12 bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-6">
						Professional Journey
					</h2>
					<div className="space-y-6">
						{experience.map((exp, index) => (
							<div
								key={index}
								className="border-l-2 border-neutral-700 pl-4"
							>
								<h3 className="text-xl font-semibold">
									{exp.role}
								</h3>
								<p className="text-gray-400">{exp.company}</p>
								<p className="text-sm text-gray-500">
									{exp.period}
								</p>
								<p className="mt-2">{exp.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="bg-black/75 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Connect</h2>
					<p className="mb-4">
						I&apos;m always interested in new opportunities and
						collaborations. Whether you want to discuss a project or
						just say hello, feel free to reach out!
					</p>
					<a
						href="/contact"
						className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded-lg transition-colors"
					>
						Get in Touch
					</a>
				</div>
			</div>
		</div>
	);
}

const skills = [
	"React",
	"TypeScript",
	"Node.js",
	"Next.js",
	"Python",
	"AWS",
	"Docker",
	"GraphQL",
];

const experience = [
	{
		role: "Senior Software Engineer",
		company: "Tech Solutions Inc.",
		period: "2020 - Present",
		description:
			"Leading development of enterprise-scale web applications, mentoring junior developers, and implementing best practices.",
	},
	{
		role: "Full Stack Developer",
		company: "Digital Innovations Co.",
		period: "2018 - 2020",
		description:
			"Developed and maintained multiple client projects using React, Node.js, and AWS infrastructure.",
	},
	{
		role: "Web Developer",
		company: "StartUp Labs",
		period: "2016 - 2018",
		description:
			"Built responsive web applications and contributed to the company's core product development.",
	},
];
