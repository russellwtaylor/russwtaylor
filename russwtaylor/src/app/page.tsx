"use client";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl font-bold text-center">
				Russell Taylor Portfolio Site
			</h1>
			<p className="text-lg text-center">Welcome to my portfolio!</p>

			<div className="max-w-4xl text-center">
				<p className="mb-4">
					I am a software developer specializing in web applications
					and CRM integrations.
				</p>
				<p className="mb-4">
					Feel free to explore my projects and get in touch!
				</p>

				<div className="flex justify-center space-x-4">
					<a
						href="/projects"
						className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-colors"
					>
						View Projects
					</a>
					<a
						href="/contact"
						className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-colors"
					>
						Contact Me
					</a>
				</div>
			</div>
		</div>
	);
}
