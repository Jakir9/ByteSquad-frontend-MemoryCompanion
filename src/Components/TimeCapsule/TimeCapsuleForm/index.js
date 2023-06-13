
// plan: This is a new page that will be created for the time capsule form.
// we want to create a form that will allow the user to upload images
// sent down states from parent component so that it can be updated when a new image is uploaded
// we want the uploaded image to be added to previous images

function UploadImages({ setImages, images }) {
        function handleChange(e) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImages((prevImages) => [...prevImages, imageUrl]);
          }
 
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={images} alt= "uploaded" />
 
        </div>
 
    );
}



export default UploadImages