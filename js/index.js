var images = ["berlinTeufelsBerg", "bigBenUdssrBlackandwhite", "millionMaskMarchBuckinghamPalace", "horseMountains", "manOxfordStreet", "shardClose", "shardColourFilm"];
var i = 0;

function changeImage() {
	$("#currentImage").attr("src", "images/" + images[i] + ".jpg");
	}

function previousImage() {
	i--;
	changeImage();

  if (i <=0) {
    i = images.length -1;
  }
}

function nextImage() {
	i++;
	changeImage();

  if (i <= images.length -1) {
    i = 0;
  }
}

function goArchive() {
// ???????????????
}

$("#forward").click(nextImage);
$("#back").click(previousImage);
$("#archive").click(goArchive);
