const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log("🚀 ~ file: page.tsx:23 ~ entries.forEach ~ entry", entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("visually-hidden");
		}
	});
});

module.exports = observer;
