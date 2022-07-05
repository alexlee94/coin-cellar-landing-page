import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				{/* Left Side */}
				<div className="left">
					<p>Buy, Sell, and Store hundreds of Cryptocurrencies</p>
					<h1>Investing In Crypto Has Never Been More Rewarding</h1>
					<p>Earn annual rewards for every purchase</p>
					<div className="input-container">
						<input type="email" placeholder="Enter your email" />
						<button className="btn">Learn More</button>
					</div>
				</div>
				{/* Right Side */}
				<div className="right">
					<div className="img-container">
						<img src={Crypto} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
