import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/edu.css";

const Education = () => {
	return (
		<div className="edus">
			<Card
				icon={faBook}
				title="Education"
				body={
					<div className="edus-body">
						<div className="edu">
							<img
								src="./CBSE.png"
								alt="CBSE"
								className="edu-image"
							/>
							<div className="edu-title">CBSE Board</div>
							<div className="edu-subtitle">
								10th
							</div>
							<div className="edu-duration">2017 - 18</div>
						</div>

						<div className="edu">
							<img
								src="./CBSE.png"
								alt="CBSE"
								className="edu-image"
							/>
							<div className="edu-title">CBSE Board</div>
							<div className="edu-subtitle">
								12th
							</div>
							<div className="edu-duration">2019 - 20</div>
						</div>
						<div className="edu">
							<img
								src="./aktu.png"
								alt="AKTU"
								className="edu-image"
							/>
							<div className="edu-title">Dr. A.P.J. Abdul Kalam Technical University</div>
							<div className="edu-subtitle">
								B.Tech (Information Technology)
							</div>
							<div className="edu-duration">2020 - 24</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
