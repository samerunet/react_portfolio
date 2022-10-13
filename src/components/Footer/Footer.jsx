import React from "react";
import "./Footer.css";
import Wave from "../../img/footer.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
	return (
		<div className='footer'>
			<img src={Wave} alt='' style={{ width: "100%" }} />
			<div className='f-content'>
				<span className="text">samerunet@gmail.com</span>
				<div className='f-icons'>
					<Linkedin color='black' size={"3rem"} />
					<Gitub color='black' size={"3rem"} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
