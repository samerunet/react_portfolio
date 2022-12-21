import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import uno from "../../img/uno_clone.png";
import yello from "../../img/yello.png";
import manager from "../../img/manager.png";
import finsta from "../../img/finsta.png";
const Testimonial = () => {
	const projects = [
		{
			image: yello,
			title: "yello",
			review: "Social media application with full backend support ",
			review1:
				"Served backend using Python and Django , utilizing Django models ( user auth & model to model relation Hashed user password for auth, utilized Django templates with Bootstrap for better admin dashboard,  Django dependency: crispy-forms, bcrypt, pillow, whitnoise, gunicorn, crispy-bootstrap Convert to Json response and test with Postman",
			review2:
				"Full CRUD for user ( create user , create post by user , update user post or delete, view all post by any user ",
			review3:
				" Served front end using React.js , utilized react router , react Tailwind Css, react components. User permission to view main content after auth. Utilized props and destructure props in components",
			linkFront:
				"https://63a2634ac8aff305da276de1--celebrated-croquembouche-a0358d.netlify.app/",
			linkBack: "https://secure-forest-62515.herokuapp.com/api",
			linkGit: "https://github.com/samerunet/milestone/tree/main/react_uno",
			linkGitBack: "https://github.com/amiemora/yello_backend_2",
		},
		{
			image: uno,
			title: "Uno card game clone",
			review: "Created uno card game clone     ",
			review1:
				"Served backend using Java and SpringBoot/Hibernate with user model and tested using IntelleJ and Postman",
			review2: "Front-end served with React.js with react Tailwind CSS",
			review3:
				" react router , axios, framer motion Implemented Javascript methods and functions in order to utilize Array manipulations between users",
			linkFront: "https://dry-mountain-24907.herokuapp.com/login",
			linkBack: "https://github.com/samerunet/milestone/tree/main/react_uno",
			linkGit: "https://github.com/samerunet/milestone/tree/main/react_uno",
		},

		{
			image: finsta,
			title: "Finstagram",
			review: "Created MERN stack application ",
			review1:
				"Used React.js to serve the front-end with Javascript methods and functions.",
			review2:
				"Served the back-end of the application using  Node.js and Express methods and functions utilizing MongoDB database management. Styled and created the visual aspects using Materialize, HTML5, and CSS3",
			review3:
				"Made frequent commits using Git control throughout the production of the application.",
			linkFront: "https://obscure-retreat-97969.herokuapp.com/",
			linkBack: "https://young-oasis-10029.herokuapp.com/",
			linkGit: "https://github.com/samerunet/project_3_front",
			linkGitBack: "https://github.com/eduardopaaaa/P3",
		},
		{
			image: manager,
			title: "Password manager",
			review:
				"Utilized EJS  components for the front-end of the application creating an application that organizes client passwords. ",
			review1:
				"Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Postman.        ",
			review2:
				"Implemented ES6 tagged template literals with Styled-Components along CSS3 and Bootstrap to provide style and flexbox layout of the application.         ",
			review3: "Used Mongoose to define schemas for MongoDB collections.",
			linkFront: "https://rocky-falls-24743.herokuapp.com/",
			linkBack: "https://rocky-falls-24743.herokuapp.com/",
			linkGit: "https://github.com/samerunet/ga_project2",
			linkGitBack: "https://github.com/samerunet/ga_project2",
		},
	];

	return (
		<div className='t-wrapper' id='testimonial'>
			<div className='t-heading'>
				<span></span>
				<span>Portfolio </span>
				<div
					className='blur t-blur1'
					style={{ background: "var(--purple)" }}
				></div>
				<div className='blur t-blur2' style={{ background: "skyblue" }}></div>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{projects.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='testimonial'>
								<span>{item.title}</span>
								<img src={item.image} alt={item.title} />
								<span>{item.review}</span>
								<span>{item.review1}</span>
								<span>{item.review2}</span>
								<span>{item.review3}</span>
								<div className='outside-wrapper'>
									<a className='outside' href={item.linkFront} target='blank'>
										Live Front
									</a>
									<a className='outside' href={item.linkBack} target='blank'>
										Live Back
									</a>
									<a className='outside' href={item.linkGit} target='blank'>
										GitHub Front
									</a>
									<a className='outside' href={item.linkGitBack} target='blank'>
										GitHub Backend
									</a>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonial;
