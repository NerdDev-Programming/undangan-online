"use client";

import "./globals.css";
import { Rubik } from "@next/font/google";
import autoAnimate from "@formkit/auto-animate";
import Script from "next/script";
import { useEffect, useRef } from "react";

const customFont = Rubik({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const parent = useRef(null);
	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={customFont.className}>
				<div ref={parent}>{children}</div>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
					crossOrigin="anonymous"
					strategy="lazyOnload"
				/>
				<Script
					src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
					crossOrigin="anonymous"
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
