document.addEventListener("DOMContentLoaded", function () {
	new TypeIt("h2", {
		speed: 50,
		startDelay: 900,
		afterComplete: async (instance) => {
			new TypeIt("strong", {
				speed: 50,
				startDelay: 0,
				deleteSpeed: 50,
				loop: true,
				lifeLike: true,
				cursorChar: "",
			})
				.type("który ma Auto-role")
				.pause(1500)
				.delete()
				.type("z wieloma funkcjami moderacyjnymi")
				.pause(1500)
				.delete()
				.type("z dużą ilością funkcji 4fun")
				.go();
		},
	})
		.type("Bot na discorda <strong> </strong>")
		.go();
});
