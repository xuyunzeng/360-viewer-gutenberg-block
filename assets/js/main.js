const panoImage =
  document.querySelector(".pano-container").attributes["pano"].value;

const panoramaImage = new PANOLENS.ImagePanorama(panoImage);
const imageContainer = document.querySelector(".pano-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer.add(panoramaImage);
