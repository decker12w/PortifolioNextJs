import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Poppins } from "next/font/google";
import ScrollTop from "../components/scrollTop/ScrollTop";
import { DarkModeProvider } from "../context/darkModeContext";

const PoppinsFont = Poppins({
	subsets: ["latin"],
	weight: "600"
});

export const metadata: Metadata = {
	title: "Portifólio",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={PoppinsFont.className}>
				<div className="container">
					<DarkModeProvider>
						<NavBar></NavBar>
					</DarkModeProvider>
					{children}
				</div>
				<Footer></Footer>
				<ScrollTop></ScrollTop>
			</body>
		</html>
	);
}
