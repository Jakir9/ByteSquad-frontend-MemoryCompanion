

function TimeCapsulePhotoGallery({images}) {
  return (
    <div class="grid grid-cols-3 gap-4">
  <img src={images[0]} alt="Image 1" class="gallery-item"></img> {/* This will display first image in images array */}
  <img src={images[1]} alt="Image 2" class="gallery-item"></img>
  <img src={images[2]} alt="Image 3" class="gallery-item"></img>
</div>
  )
}

export default TimeCapsulePhotoGallery