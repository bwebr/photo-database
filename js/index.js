var images = ["berlinTeufelsBerg", "bigBenUdssrBlackandwhite", "millionMaskMarchBuckinghamPalace", "horseMountains", "manOxfordStreet", "shardClose", "shardColourFilm"];
var i = 0;

function changeImage() {
	$("#currentImage").attr("src", "images/" + images[i] + ".jpg");
}

function previousImage() {
	i = i - 1; /* you're reassigning i to be the current value of i - 1 */
	changeImage();

  if (i === 0) { /* if first image then reset i */
    i = images.length;
  }
}

function nextImage() {
	i = i + 1; /* you're reassigning i to be the current value of i + 1 */
	changeImage();

  if (i === images.length - 1) { /* if last image then reset i */
    i = -1;
  }
}

function goArchive() {
// ???????????????
}


$("#forward").click(nextImage);
$("#back").click(previousImage);
$("#archive").click(goArchive);
