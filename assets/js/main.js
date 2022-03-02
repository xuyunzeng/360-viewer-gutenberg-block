// const panoImage =
//   document.querySelector(".pano-container").attributes["pano"].value;

// const panoramaImage = new PANOLENS.ImagePanorama(panoImage);
// const imageContainer = document.querySelector(".pano-container");

const panoImageContainers = Array.from(
  document.querySelectorAll(".pano-container")
);

panoImageContainers.forEach((container) => {
  const panoURL = container.attributes["pano"].value;
  const panoramaImage = new PANOLENS.ImagePanorama(panoURL);

  const viewer = new PANOLENS.Viewer({
    container: container,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
  });

  viewer.add(panoramaImage);
});
