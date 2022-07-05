import React from "react";
import "./Signup.css";
import Crypto from "../assets/trade.jpg";

const Signup = () => {
	return (
		<div className="signup">
			<div className="container">
				{/* left */}
				<div className="left">
					<img src={Crypto} alt="" />
				</div>
				{/* right */}
				<div className="right">
					<h2>Generate a Passive Income</h2>
					<p>
						Earn up to 17% annual rewards on 50+ digital assets. Hold your
						assets in the app to automatically earn rewards at the end of each
						month. Zero limits. Zero lockups. All reward.
					</p>
					<div className="input-container">
						<input type="email" placeholder="Enter your email" />
						<button className="btn">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
