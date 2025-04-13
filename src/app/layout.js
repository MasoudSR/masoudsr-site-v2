import "./globals.css";

export const metadata = {
	title: "Masoud S.R",
	description: "AmirMasoud SepehrRad , Front-End Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
