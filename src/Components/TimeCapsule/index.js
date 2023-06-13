// PLAN
// create component for PhotoGallery
// create component for TimeCapsuleForm
// We want to create a page where we can display images uploaded by the user
// we also want to attach a delete button to each image
// we want upload moment button that will route us to another page where we can upload images as a file
// we want the initial page to be uploaded with the image when we click add. 
// import all images from image component folder

import { useState } from 'react'
import image1 from './images/fenix-fox1.jpg'
import image2 from './images/fenix-fox2.jpg'
import image3 from './images/fenix-fox3.jpg'
import TCPhotoGallery from './TCPhotoGallery'
import TimeCapsuleForm from './TimeCapsuleForm'

// state with hardcoded images so it can be displayed on page. 
function TimeCapsule() {
 const [images, setImages] = useState([
  image1,
  image2,
  image3,])
// we want to update the state when a new image is uploaded by the user through the component TimeCapsuleForm



  return (
    <div>
    <h1>Time Capsule</h1>
    <TCPhotoGallery images={images} /> {/* state is passed down as a prop to TCPhotoGallery component*/}
    <TimeCapsuleForm  setImages={setImages} images={images}/>
    <button>Upload Moment</button>
  </div>
  )
}

export default TimeCapsule