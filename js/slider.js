let time = 3500,
	currentImageIndex = 0,
	images = document
				.querySelectorAll("#mockup img")
	max = images.length;

	function nextImage() {

		 images[currentImageIndex]
		 	.classList.remove("selected")

		currentImageIndex++

		if(currentImageIndex >= max)
			currentImageIndex = 0

		images[currentImageIndex]
			.classList.add("selected")
	}
	function start() {
		setInterval(() => {
			nextImage()
		}, time)
		
	}

	window.addEventListener("load", start)