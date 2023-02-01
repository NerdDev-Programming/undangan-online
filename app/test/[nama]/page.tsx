// @ts-nocheck
"use client";

import "./styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Dancing_Script } from "@next/font/google";
import Image from "next/image";
import { Container, Carousel, Form, FormGroup, Button } from "react-bootstrap";
import dayjs from "dayjs";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { MessageList, Avatar } from "react-chat-elements";
import React from "react";

import ImageList from "@components/ImageList";

const fontNama = Dancing_Script({
	weight: "400",
	subsets: ["latin"],
	display: "auto",
});

const photos = [
	{ src: "/contohCouple.jpg", width: 800, height: 600 },
	{ src: "/contoh2.jpg", width: 800, height: 1200 },
	{ src: "/contoh3.jpg", width: 800, height: 1200 },
	{ src: "/contoh4.jpg", width: 800, height: 1200 },
	{ src: "/contoh5.jpg", width: 800, height: 1200 },
	{ src: "/kang daniel.jpg", width: 750, height: 500 },
	{ src: "/karina.jpg", width: 1600, height: 900 },
];

const getData = () => {
	//! get data
};

const sendData = () => {
	//! send data
};

const Page = ({ params }) => {
	let messageListReferance = React.createRef();
	const [index, setIndex] = useState(-1);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
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
						<h1
							className={`${fontNama.className}`}
							style={{ fontSize: "80px" }}
						>
							Andi and Rita
						</h1>
					</div>
					<div id="bottom1">
						Dear Mr./Mrs./Ms. <br />
						{params.nama.charAt(0).toUpperCase() + params.nama.slice(1)}
					</div>
				</section>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 1 }}
			>
				<section id="weddingDay">
					<div id="main-center">
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.7 }}
						>
							<h2 className={`${fontNama.className}`}>Save the Date</h2>
							<h3>{dayjs("2023-03-15").format("dddd, DD MMMM YYYY")}</h3>
							<Image
								src={"/test.png"}
								alt={"happines"}
								width={200}
								height={200}
							/>
							<br />
							<h1
								className={`${fontNama.className}`}
								style={{ fontSize: "3rem" }}
							>
								Andi and Rita
							</h1>
						</motion.div>
					</div>
				</section>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 1 }}
			>
				<section id="profile">
					<Container className="text-center py-4">
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.3 }}
						>
							<h5>
								By the grace of god we cordially request the honour of your
								presence to share the joy of marriage of
							</h5>
							<h2 className={fontNama.className}>The Groom</h2>
							<Image
								src={"/kang daniel.jpg"}
								alt="the groom"
								width={380}
								height={300}
								style={{
									objectFit: "contain",
									width: "auto",
									height: "auto",
								}}
								className={"img-fluid"}
							/>

							<div style={{ fontSize: "30px" }}>Andi</div>
							<p style={{ fontSize: "16px" }} className={"text-wrap"}>
								Oldest son of Mr. Kurniawan and Mrs. Betty
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<Image
								src={"/test.png"}
								alt={"happines"}
								width={150}
								height={150}
								style={{ objectFit: "contain" }}
							/>
						</motion.div>

						<br />

						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<h2 className={`${fontNama.className}`}>The Bride</h2>
							<Image
								src={"/karina.jpg"}
								alt="the groom"
								width={380}
								height={300}
								style={{
									objectFit: "contain",
									width: "auto",
									height: "auto",
								}}
								className={"rounded img-fluid"}
							/>

							<div style={{ fontSize: "30px" }}>Rita</div>
							<p style={{ fontSize: "16px" }} className={"text-wrap"}>
								Oldest daughter of Mr. Liman and Mrs. Karina
							</p>
						</motion.div>
					</Container>
				</section>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 1 }}
			>
				<section id="dates" className="py-3 text-center justify-content-center">
					<motion.div
						initial={{ opacity: 0, y: 200 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 1 }}
					>
						<h1
							className={`text-center ${fontNama.className}`}
							style={{ fontSize: "3rem" }}
						>
							Save The Date
						</h1>
					</motion.div>
					<Container style={{ width: "90vw" }}>
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<p>
								“But at the beginning of creation God ‘made them male and
								female.’ ‘For this reason a man will leave his father and mother
								and be united to his wife, and the two will become one flesh.’
								So they are no longer two, but one flesh. Therefore what God has
								joined together, let no one separate.”
							</p>
							(Mark 10:6-9)
						</motion.div>
						<Image
							src={"/contoh4.jpg"}
							alt="contoh4"
							fill
							style={{
								zIndex: -1,
								opacity: 0.6,
								objectFit: "cover",
							}}
						/>

						<br />

						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<div id="detail-tanggal" className="py-2 rounded">
								<h2>Engagement/Sangjit</h2>
								<br />
								<p>{dayjs().format("dddd, DD MMMM YYYY")}</p>
								<Image
									src={"/schedule.png"}
									alt={"schedule"}
									width={50}
									height={50}
								/>{" "}
								<br />
								Imlek: 22-10-2570
								<br />
								<br />
								<Image
									src={"/clock.png"}
									alt={"clock"}
									width={50}
									height={50}
								/>
								<br />
								17.00 WIB
								<br />
								<br />
								<Image src={"/map.png"} alt={"map"} width={50} height={50} />
								<p>
									Hotel Golden Tulip
									<br />
									Jl. Teuku Umar No. 39
									<br />
									<br />
									<a
										href="https://goo.gl/maps/dUWiG47dTHDdF3oj8"
										target={"_blank"}
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										Buka Maps
									</a>
								</p>
							</div>
						</motion.div>
						<br />
						<br />
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<div id="detail-tanggal" className="py-2 rounded">
								<h2>Wedding Reception</h2>
								<br />
								<p>{dayjs("2023-03-15").format("dddd, DD MMMM YYYY")}</p>
								<Image
									src={"/schedule.png"}
									alt={"schedule"}
									width={50}
									height={50}
								/>{" "}
								<br />
								Imlek: 22-12-2570
								<br />
								<br />
								<Image
									src={"/clock.png"}
									alt={"clock"}
									width={50}
									height={50}
								/>
								<br />
								17.00 WIB - 21.00 WIB
								<br />
								<br />
								<Image src={"/map.png"} alt={"map"} width={50} height={50} />
								<p>
									Hotel Aston
									<br />
									Jl. Gadjah Mada No. 21
									<br />
									<br />
									<a
										href="https://goo.gl/maps/ZtYhHanAdEPknzto9"
										target={"_blank"}
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										Buka Maps
									</a>
								</p>
							</div>
						</motion.div>
					</Container>
				</section>
			</motion.div>

			<div
				className={"py-5"}
				style={{ backgroundColor: "beige", width: "100%" }}
			>
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1 }}
				>
					<Container className="text-center py-3">
						<p className="text-wrap" style={{ fontSize: "18px" }}>
							“Like wise, husbands, live with your wives in an understanding
							way, showing honor to the woman as the weaker vessel, since they
							are heirs with you of the grace of life, so that your prayers may
							not be hindered.” <br />
							(1 Petrus 3:7)
						</p>
					</Container>
				</motion.div>
			</div>

			<section id="galery" className={"text-center justify-content-around "}>
				<motion.div
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1 }}
				>
					<h1 className={`${fontNama.className} text-center`}>Our Galery</h1>
					<br />
					<motion.div
						initial={{ opacity: 0, transform: "scale(0)" }}
						whileInView={{ opacity: 1, transform: "scale(1)" }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 1 }}
					>
						<PhotoAlbum
							layout="masonry"
							photos={photos}
							renderPhoto={ImageList}
							onClick={({ index }) => setIndex(index)}
						/>
					</motion.div>
					<Lightbox
						slides={photos}
						open={index >= 0}
						index={index}
						close={() => setIndex(-1)}
						plugins={[Thumbnails]}
					/>
				</motion.div>
			</section>

			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 1 }}
			>
				<section id="ucapan">
					<h1 className={`text-center ${fontNama.className}`}>
						Messages and Prayers
					</h1>
					<br />
					<div id={"form-ucapan"} className={"rounded"}>
						<Form className={"m-auto"}>
							<Form.Group>
								<Form.Label>Nama</Form.Label>
								<Form.Control type="text" min={3} required />
							</Form.Group>
							<br />
							<Form.Group>
								<Form.Label>Ucapan</Form.Label>
								<Form.Control as="textarea" rows={3} required />
							</Form.Group>
							<br />
							<Button type="submit" className="primary">
								Kirim
							</Button>
						</Form>
						<br />
						<br />
						<div style={{ overflowY: "scroll", height: "25vh" }}>
							<MessageList
								referance={messageListReferance}
								className='message-list'
								lockable={false}
								toBottomHeight={"100%"}
								dataSource={[
									{
										position: "right",
										type: "text",
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
										avatar: "/wedding.png",
									},
									{
										position: "right",
										type: "text",
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
										avatar: "/wedding.png",
									},
									{
										position: "right",
										type: "text",
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
										avatar: "/wedding.png",
									},
									{
										position: "right",
										type: "text",
										text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
										avatar: "/wedding.png",
									},
								]}
							/>
						</div>
					</div>
				</section>
			</motion.div>

			<section
				id="outtro"
				className={"text-center d-flex justify-content-around"}
			>
				<div
					style={{
						zIndex: -1,
						position: "absolute",
						opacity: 0.6,
					}}
				>
					<Carousel interval={2000} fade controls={false} indicators={false}>
						<Carousel.Item>
							<Image
								src={"/contoh5.jpg"}
								alt="contoh"
								width={600}
								height={700}
								style={{
									width: "100vw",
									height: "100vh",
									objectFit: "cover",
								}}
								className={"img-fluid"}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src={"/contohCouple.jpg"}
								alt="contoh"
								width={600}
								height={700}
								style={{
									width: "100vw",
									height: "100vh",
									objectFit: "cover",
								}}
								className={"img-fluid"}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src={"/karina.jpg"}
								alt="contoh"
								width={600}
								height={700}
								style={{
									width: "100vw",
									height: "100vh",
									objectFit: "cover",
								}}
								className={"img-fluid"}
							/>
						</Carousel.Item>
					</Carousel>
				</div>

				<Container className="py-4 text-center">
					<div id="main-center">
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1 }}
						>
							<p
								style={{ fontSize: "1.5rem", width: "80vw", margin: "auto" }}
								className={"word-wrap"}
							>
								Our joy will be more complete with your presence and blessing in
								this celebration of love. With warm regards,
							</p>
							<h1
								className={`${fontNama.className}`}
								style={{ fontSize: "80px" }}
							>
								Andi and Rita
							</h1>
							<p style={{ fontSize: "1.5rem" }}>
								Family of Mr. Kurniawan and Mrs. Betty <br />
								Family of Mr. Liman and Mrs. Karina
							</p>
						</motion.div>
					</div>
				</Container>
			</section>

			<footer>
				Digital Invitation, created by: NerDev <br />
				WA:
				<br />
				<br />
				<Image
					src={"/whatsapp-logo.png"}
					alt={"whatsapp"}
					height={30}
					width={30}
				/>
				&nbsp;&nbsp;&nbsp;
				<Image src={"/instagram.png"} alt={"ig"} height={30} width={30} />
			</footer>
		</>
	);
};

export default Page;
