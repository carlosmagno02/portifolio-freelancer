let times = 3500,
	currentsImageIndex = 0,
	image = document
				.querySelectorAll("#layout img")
	max = image.length;

	function nextImage() {

		 image[currentsImageIndex]
		 	.classList.remove("selecionada")

		currentsImageIndex++

		if(currentsImageIndex >= max)
			currentsImageIndex = 0

		image[currentsImageIndex]
			.classList.add("selecionada")
	}
	function start() {
		setInterval(() => {
			nextImage()
		}, times)
		
	}

	window.addEventListener("load", start)