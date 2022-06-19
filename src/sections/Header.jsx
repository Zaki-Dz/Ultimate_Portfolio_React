import React from "react"
import styled from "styled-components"
import images from "../assets/"
import Pagination from "../components/Pagination"

const Header = () => {
	return (
		<SHeader background={images.bgIMG}>
			<div className="container">
				<Pagination />

				<div className="popups">
					<div className="top">
						<div className="emoji">👋</div>
						<div className="text">
							<p>Hello, I&apos;m</p>

							<span>Micael</span>
						</div>
					</div>

					<div className="work">
						<p>Web Developer</p>

						<p>Freelancer</p>
					</div>
				</div>

				<div className="image">
					<img src={images.profile} className="profile" />

					<img src={images.circle} className="circle" />

					<div className="bubbles">
						<img src={images.flutter} />

						<img src={images.redux} />

						<img src={images.sass} />
					</div>
				</div>
			</div>
		</SHeader>
	)
}

export default Header

const SHeader = styled.section`
	height: 100vh;
	background-image: url(${(props) => props.background});
	background-size: cover;
	padding-top: 5rem;

	.container {
		.popups {
			width: fit-content;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.top {
				background-color: white;
				border-radius: 1rem;
				box-shadow: 0 0 1rem #0003;
				display: flex;
				align-items: center;
				padding: 1rem 2rem;
				gap: 1rem;

				.emoji {
					font-size: 2rem;
				}

				.text {
					span {
						font-size: 2rem;
						font-weight: bold;
					}
				}
			}

			.work {
				background-color: white;
				border-radius: 1rem;
				box-shadow: 0 0 1rem #0003;
				display: flex;
				flex-direction: column;
				align-items: end;
				padding: 1rem 2rem;
				align-self: end;
			}
		}

		.image {
			max-width: 400px;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;

			@media (max-width: 768px) {
				width: 300px;
			}

			.circle {
				position: absolute;
				left: 0;
				z-index: -1;
			}

			.bubbles {
				position: absolute;
				top: 0;
				right: -150px;
				z-index: -1;

				img {
					background-color: white;
					border-radius: 50%;
					box-shadow: 0 0 1rem #0003;
					display: flex;
					align-items: center;
					padding: 1rem;

					@media (max-width: 850px) {
						&:nth-child(1) {
							max-width: 70px !important;
							transform: translateX(-20px) !important;
							margin-bottom: 70px;
							padding: 0.5rem;
						}

						&:nth-child(2) {
							max-width: 100px !important;
							transform: translateX(10px) !important;
							margin-bottom: 70px;
							padding: 0.5rem;
						}

						&:nth-child(3) {
							max-width: 50px !important;
							transform: translateX(-40px) !important;
							padding: 0.5rem;
						}
					}

					@media (max-width: 768px) {
						display: none;
					}

					&:nth-child(1) {
						max-width: 100px;
						transform: translateX(0);
						margin-bottom: 70px;
					}

					&:nth-child(2) {
						max-width: 130px;
						transform: translateX(30px);
						margin-bottom: 70px;
					}

					&:nth-child(3) {
						max-width: 70px;
						transform: translateX(-20px);
					}
				}
			}
		}
	}
`
