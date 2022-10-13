import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

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
				<span style={{ color: darkMode ? "white" : "" }}></span>
				<span>Front End Developer</span>
				<span>
					I specialize in front-end web development, carefully crafting and
					preserving design integrity, and delivering on the promise of
					interactivity and user experience. <br />I love working with clients
					directly, or as part of a team to create new solutions.
					<br /> I've been a part of some incredible projects and I approach
					each one as an opportunity to learn something new. <br />
					My ability to adapt, work under deadlines or constant pressure, and -
					most importantly - communicate effectively, stems from my experience .
					<br /> Core languages: HTML5, CSS3, JavaScript (ES6) Always open to
					discussing new technologies and practices.
					<br />
					<br />
				</span>
				<a href={Resume} download>
					<button className='button s-button'>Resume</button>
				</a>
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
						heading={"Languages: "}
						detail={" JavaScript(ES6+), HTML5, CSS3, Node.js   "}
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
						heading={"Frameworks:"}
						detail={
							" React, Styled-component, Bootstrap, Tailwind css , Express , Postman, Postman, Django, JQuery, Heroku, Git version, EJS, Mongoose"
						}
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
						heading={"Data base: "}
						detail={"SQLite, MySQL, PostgreSQL, MongoDB"}
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
