import React, { useContext } from "react";
import "./Works.css";
import Java from "../../img/javascript-39405.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import JavaScript from "@iconscout/react-unicons/icons/uil-java-script";
import HTML from "@iconscout/react-unicons/icons/uil-html5";
import ReactIcon from "@iconscout/react-unicons/icons/uil-react";
import CSS from "@iconscout/react-unicons/icons/uil-css3-simple";
import DataBase from "@iconscout/react-unicons/icons/uil-database";
const Works = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className='works' id='works'>
			{/* left side */}
			<div className='w-left'>
				<div className='awesome'>
					{/* dark Mode */}
					<span style={{ color: darkMode ? "white" : "" }}>Languages</span>
					<span> Framerworks & Libraries</span>
					<spane>
						Front end developer <br /> Full stack developer <br />
						JavaScript ES6+
						<br />
						Jquery
						<br /> RESt API
						<br /> MongoDB <br />
						Express
						<br /> EJS <br />
						Mongoose <br />
						HTML , HTML5 <br />
						CSS3 (flexbox, css grid) <br />
						Tailwind CSS , Bootstrap <br /> React.js <br /> Node.js
						<br /> Axios <br />
						Python, Django <br />
						PostgreSQL <br /> MySQL SQLite <br /> GIT version control
					</spane>
					<Link to='contact' smooth={true} spy={true}>
						<button className='button s-button'>Hire Me</button>
					</Link>
					<div
						className='blur s-blur1'
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>

				{/* right side */}
			</div>
			<div className='w-right'>
				<motion.div
					initial={{ rotate: 145 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: "-40px" }}
					transition={{ duration: 10.5, type: "spring" }}
					className='w-mainCircle'
				>
					<div className='w-secCircle'>
						<JavaScript color={"orange"} size={"10rem"} />
					</div>
					<div className='w-secCircle'>
						<HTML color={"darkorange"} size={"10rem"} />
					</div>
					<div className='w-secCircle'>
						<ReactIcon color={"lightblue"} size={"10rem"} />
					</div>{" "}
					<div className='w-secCircle'>
						<CSS color={"blue"} size={"10rem"} />
					</div>
					<div className='w-secCircle'>
						<DataBase color={"red"} size={"10rem"} />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className='w-backCircle blueCircle'></div>
				<div className='w-backCircle yellowCircle'></div>
			</div>
		</div>
	);
};

export default Works;
