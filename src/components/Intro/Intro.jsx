import React, { useContext } from "react";
import "./Intro.css";
import Vector2up from "../../img/Vector2.png";
import Vector from "../../img/Vector1.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
const Intro = () => {
	// Transition
	const transition = { duration: 2, type: "spring" };

	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className='Intro' id='Intro'>
			{/* left name side */}
			<div className='i-left'>
				<div className='i-name'>
					{/*mode change */}
					<span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
					<span>Sami Sipahi</span>
					<span>
						Frontend Developer with experience in web development and
						development, producting the Quality work and
						<br />
						Quality code by applying the right Algorithm to produce the best
						outcome
					</span>
				</div>
				<Link to='contact' smooth={true} spy={true}>
					<button className='button i-button'>Contact me</button>
				</Link>
				{/* social icons */}
				<div className='i-icons'>
					<Insta color='black' size={"6rem"} />
					<Facebook color='black' size={"6rem"} />
					<Gitub color='black' size={"6rem"} />
					<Linkedin color='black' size={"6rem"} />
				</div>
			</div>
			{/* right image side */}
			<div className='i-right'>
				<img src={Vector} alt='' />
				<img src={Vector2up} alt='' />
				<img src={boy} alt='' />
				<motion.div
					initial={{ top: "-4%", left: "34%" }}
					whileInView={{ left: "28%" }}
					transition={transition}
					className='floating-div'
				>
					<FloatingDiv img={crown} text1='Software' text2='Engineer' />
				</motion.div>

				{/* animation */}
				<motion.div
					initial={{ left: "9rem", top: "25rem" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					className='floating-div'
				>
					<FloatingDiv
						img={thumbup}
						text1='Front-end Developer'
						text2='Solution provider'
					/>
				</motion.div>

				<div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
				<div
					className='blur'
					style={{
						background: "#C1F5FF",
						top: "17rem",
						width: "21rem",
						height: "11rem",
						left: "-9rem",
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
