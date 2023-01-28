"use client";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Home() {
	return (
		<Container>
			<h1>List contoh undangan yang ada</h1>
			<Link href="/contoh/daniel">Contoh 1</Link>
		</Container>
	);
}
