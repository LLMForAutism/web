"use client";

import { useState } from "react";

export default function LangSwitcher() {
	const [currentLang, setCurrentLang] = useState("id");

	const changeWebLang = (lang: string) => {
		setCurrentLang(lang);
	};

	return (
		<div className="flex gap-3 justify-center items-center hover:scale-105 transition-transform duration-200">
			<button
				className={`h-10 w-10 rounded-full cursor-pointer font-semibold transition-opacity duration-200 ${
					currentLang === "id"
						? "bg-jade-green text-white opacity-100"
						: "opacity-50 hover:opacity-100"
				}`}
				onClick={() => changeWebLang("id")}
			>
				ID
			</button>

			<button
				className={`h-10 w-10 rounded-full cursor-pointer font-semibold transition-opacity duration-200 ${
					currentLang === "en"
						? "bg-jade-green text-white opacity-100"
						: "opacity-50 hover:opacity-100"
				}`}
				onClick={() => changeWebLang("en")}
			>
				EN
			</button>
		</div>
	);
}
