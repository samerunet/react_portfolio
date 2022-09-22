import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Yello from "../../img/yello.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='portfolio' id='portfolio'>
			{/* heading */}
			<span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
			<span>Portfolio</span>

			{/* slider */}
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				className='portfolio-slider'
			>
				<SwiperSlide>
					<img src={Yello} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Yello} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Yello} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Yello} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
