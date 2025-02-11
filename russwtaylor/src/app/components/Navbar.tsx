"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-neutral-900 text-white fixed w-full top-0 z-50 shadow-lg">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className="text-xl font-bold hover:text-gray-300 transition-colors"
					>
						Russell Taylor
					</Link>

					<button
						className="md:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-1">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>
						<NavLink href="/projects">Projects</NavLink>
						<NavLink href="/contact">Contact</NavLink>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`fixed md:hidden top-[62px] right-0 h-screen w-64 bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="flex flex-col space-y-1 p-4">
						<NavLink
							href="/"
							mobile
							onClick={() => setIsOpen(false)}
						>
							Home
						</NavLink>
						<NavLink
							href="/about"
							mobile
							onClick={() => setIsOpen(false)}
						>
							About
						</NavLink>
						<NavLink
							href="/projects"
							mobile
							onClick={() => setIsOpen(false)}
						>
							Projects
						</NavLink>
						<NavLink
							href="/contact"
							mobile
							onClick={() => setIsOpen(false)}
						>
							Contact
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	mobile?: boolean;
	onClick?: () => void;
}

function NavLink({ href, children, mobile, onClick }: NavLinkProps) {
	return (
		<Link
			href={href}
			className={`${
				mobile
					? "block w-full px-4 py-2 hover:bg-neutral-800 rounded-lg transition-colors"
					: "px-4 py-2 hover:bg-neutral-800 rounded-lg transition-colors"
			}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
