import React, { useState } from "react"
import styled from "styled-components"
import images from "../assets/"
import { HiMenuAlt4, HiX } from "react-icons/hi"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	const handleButton = (x) => {
		setToggle(x)
	}

	return (
		<SNavbar toggle={toggle} background={images.bgWhite}>
			<div className="container">
				<img src={images.logo} className="logo" />

				<nav>
					<ul>
						{["home", "about", "work", "skills", "conatct"].map((item, i) => {
							return (
								<li key={i}>
									<a href={`#${item}`} onClick={() => handleButton(false)}>
										{item}
									</a>
								</li>
							)
						})}
					</ul>
				</nav>

				<button onClick={() => handleButton(!toggle)}>
					{toggle === false ? <HiMenuAlt4 /> : <HiX />}
				</button>
			</div>
		</SNavbar>
	)
}

export default Navbar

const SNavbar = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	padding-block: 1rem;
	background-color: #fff4;
	backdrop-filter: blur(0.25rem);
	z-index: 10;

	.container {
		display: flex;
		align-items: end;
		justify-content: space-between;

		.logo {
			max-width: 90px;
		}

		nav {
			flex: 1;
			display: flex;
			justify-content: center;
			transition: 0.2s;

			@media (max-width: 992px) {
				position: absolute;
				background-color: white;
				top: 0;
				right: 0;
				transform: translateX(
					${(props) => (props.toggle === false ? "100%" : "0")}
				);
				padding: 2rem;
				min-height: 100vh;
				background-image: url(${(props) => props.background});
				background-size: cover;
				min-width: 300px;
				justify-content: start;
			}

			@media (max-width: 400px) {
				width: 100%;
			}

			ul {
				display: flex;
				gap: 1rem;

				@media (max-width: 992px) {
					flex-direction: column;
				}

				li {
					text-transform: uppercase;
					color: var(--gray-color);
					font-weight: 500;
					transition: 0.3s;
					position: relative;

					&:hover {
						color: var(--secondary-color);
					}

					&::before {
						content: "";
						position: absolute;
						top: -10px;
						left: 50%;
						transform: translateX(-50%);
						width: 10px;
						height: 10px;
						background-color: transparent;
						border-radius: 50%;
						transition: 0.2s;

						@media (max-width: 992px) {
							display: none;
						}
					}

					&:hover::before {
						background-color: var(--secondary-color);
					}
				}
			}
		}

		button {
			color: white;
			border: 1px solid white;
			border-radius: 50%;
			background-color: var(--secondary-color);
			display: flex;
			padding: 0.5rem;
			z-index: 10;

			@media (min-width: 993px) {
				display: none;
			}
		}
	}
`
