import React, { useEffect, useRef, useState } from "react";
import { MyResponsiveLine, MyResponsiveBump, MyResponsiveAreaBump, MyResponsiveBar } from "./components";
import lineData from "./constants/line-data";
import bumpData from "./constants/bump-data";
import barData from "./constants/bar-data";
function ImageGallery() {
	const images = [1, 2, 3, 4, 5, 6];

	return (
		<div>
			{/* <div style={{ height: "50vh" }}>
				<MyResponsiveLine data={lineData} />
			</div> */}
			<div style={{ height: "50vh" }}>
				<MyResponsiveBar data={barData} />
			</div>
			<div style={{ height: "50vh" }}>
				<MyResponsiveBump data={bumpData} />
			</div>
			<div style={{ height: "50vh" }}>
				<MyResponsiveAreaBump data={bumpData} />
			</div>
		</div>
	);
}

export default ImageGallery;

// function Item({ url }) {
// 	const imgRef = useRef();
// 	const [inView, setInView] = useState(false);
// 	useEffect(() => {
// 		const observerFn = (entries) => {
// 			entries.forEach((entry) => {
// 				const { isIntersecting } = entry;
// 				if (isIntersecting) {
// 					// setInView(true);
// 					console.log("JUST CHANGED");
// 				} else {
// 					setInView(false);
// 				}
// 			});
// 		};

// 		const observerConfig = {
// 			root: null,
// 			// rootMargin: "100px 0px 0px 0px",
// 			threshold: 0,
// 		};

// 		let observer = new IntersectionObserver(observerFn, observerConfig);

// 		observer.observe(imgRef.current);
// 	}, []);
// 	return (
// 		<img src={url} style={{ backgroundColor: inView ? "green" : "red", height: "200px", width: "200px" }} ref={imgRef} />
// 	);
// }
