"use client";

import "./styles.css";
import { Dancing_Script } from "@next/font/google";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import dayjs from "dayjs";
// import contohCouple from "./contohCouple.jpg";

const fontNama = Dancing_Script({
	weight: "400",
	subsets: ["latin"],
	display: "auto",
});

const Page = ({ params }) => {
	return (
		<>
			<section id="home">
				<Image
					src={"/contohCouple.jpg"}
					alt={"mempelai"}
					fill
					style={{
						zIndex: -1,
						opacity: 0.6,
						objectFit: "cover",
					}}
				/>
				<div id="main-center">
					<h3>The Wedding of</h3>
					<h1 className={`${fontNama.className} `} style={{ fontSize: "80px" }}>
						Andi and Rita
					</h1>
				</div>
				<div id="bottom1">
					Dear Mr./Mrs./Ms. <br />
					{params.nama.charAt(0).toUpperCase() + params.nama.slice(1)}
				</div>
			</section>
			<section id="weddingDay">
				<div id="main-center">
					<h2 className={`${fontNama.className}`}>Save the Date</h2>
					<h3>{dayjs().format("dddd, DD MMMM YYYY")}</h3>
					<Image
						src={"/test.png"}
						alt={"happines"}
						width={300}
						height={300}
						style={{ objectFit: "contain" }}
					/>
					<h1 className={`${fontNama.className}`}>Andi and Rita</h1>
				</div>
			</section>
			<section id="profile">
				<Container className="py-3 text-center">
					<h4>
						By the grace of god we cordially request the honour of your presence
						to share the joy of marriage of
					</h4>
					<br />
					<h2 className={fontNama.className}>The Groom</h2>
					<Image
						src={"/kang daniel.jpg"}
						alt="the groom"
						width={380}
						height={300}
						style={{
							objectFit: "contain",
							borderRadius: "40px",
							width: "auto",
							height: "auto",
						}}
						className={"rounded img-fluid"}
					/>

					<div style={{ fontSize: "30px" }}>Andi</div>
					<p style={{ fontSize: "16px" }} className={"text-wrap"}>
						Oldest son of Mr. Kurniawan and Mrs. Betty
					</p>

					<Image
						src={"/test.png"}
						alt={"happines"}
						width={150}
						height={150}
						style={{ objectFit: "contain" }}
					/>

					<br />
					<br />

					<h2 className={fontNama.className}>The Bride</h2>
					<Image
						src={"/karina.jpg"}
						alt="the groom"
						width={380}
						height={300}
						style={{
							objectFit: "contain",
							borderRadius: "40px",
							width: "auto",
							height: "auto",
						}}
						className={"rounded img-fluid"}
					/>

					<div style={{ fontSize: "30px" }}>Rita</div>
					<p style={{ fontSize: "16px" }} className={"text-wrap"}>
						Oldest daughter of Mr. Liman and Mrs. Karina
					</p>
				</Container>
			</section>
			<section id="dates">
				
			</section>
		</>
	);
};

export default Page;
