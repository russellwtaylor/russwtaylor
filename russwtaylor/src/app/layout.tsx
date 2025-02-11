import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Russell Taylor Portfolio",
	description: "Portfolio site for Russell Taylor",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
			>
				<div
					className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: "url('/images/background-min.jpg')",
					}}
				>
					<Navbar />
					<main className="flex-grow">{children}</main>
				</div>
			</body>
		</html>
	);
}
