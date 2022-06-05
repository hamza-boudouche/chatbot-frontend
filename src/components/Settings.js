import React from "react";
import Switch from "./Switch"

const Settings = () => {
	return (
		<div
			style={{
				display: "grid",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				height: "100%",
			}}
		>
			<div>
				<h3>Settings</h3>
				<Switch />
			</div>
		</div>
	);
};

export default Settings;
