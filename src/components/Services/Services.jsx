import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from "./resume.pdf";

const Services = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1,
		type: "spring",
	};

	return (
		<div className='services' id='services'>
			{/* left side */}
			<div className='awesome'>
				{/* dark mode */}
				<span style={{ color: darkMode ? "white" : "" }}>Developer</span>
				<span>TOOLBOX</span>
				<spane>
					I'm a passionate, informative, and innovative Frontend Engineer who
					works innovatively, collectively, and diligently
					<br />
					to deliver excellent products. I am motivated by new environments
					where I get to contribute my experience and
					<br />
					new technologies to different projects. I always aim for the best
					outcomes with my problem solving mindset.
				</spane>
				{/* <a href={Resume} download> */}
				<button className='button s-button'>Download CV</button>
				{/* </a> */}
				<div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* right */}
			<div className='cards'>
				{/* first card */}
				<motion.div
					initial={{ left: "25rem" }}
					whileInView={{ left: "14rem" }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Framework"}
						detail={
							"React.js, Jquery, RESt API,MongoDB, Express.js,EJS, Mongoose , Bootstrap , Tailwind CSS "
						}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "-4rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Full stack developer"}
						detail={"Html, Css, JavaScript, Python, Nodejs, Java"}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: "19rem", left: "25rem" }}
					whileInView={{ left: "12rem" }}
					transition={{ duration: 2, type: "tween" }}
				>
					<Card
						emoji={Humble}
						heading={"Library"}
						detail={
							"Lorem ispum dummy text are usually use in section where we need some random text"
						}
						color='rgba(252, 166, 31, 0.45)'
					/>
				</motion.div>
				<div
					className='blur s-blur2'
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
