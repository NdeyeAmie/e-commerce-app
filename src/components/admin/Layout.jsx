// import React from 'react'

// import Fouter from "../Footer"
// import { Route } from 'react-router-dom'

// import AdminNavbar from './AdminNavbar'
// import { useNavigate } from 'react-router-dom'

// const Layout = () => {
//   const navigate = useNavigate()  
//   return (
//     <>
//     {
//     navigate.pathname.startsWith("/dashboard") ? <AdminNavbar/> :  
// }
    
//       <div>
//         <Route/>
//       </div>
//       <Fouter/>
//     </>
//   )
// }

// export default Layout



// import './App.css'
import { useState } from 'react'

function Layout() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })

    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div className='App'>
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )
}

export default Layout


// import React, { useState } from 'react';
// import axios from 'axios';

// function ProductForm() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('/api/products/post', { name, description, price })
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={event => setName(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Description:
//         <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input type="text" value={price} onChange={event => setPrice(event.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Create Product</button>
//     </form>
//   );
// }

// export default ProductForm;





// import React,{useState} from 'react'
// import "./Layout.css"

// const Layout = () => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const onSelectFile = (event) => {
//     const selectedFiles = event.target.files;
//     const selectedFilesArray = Array.from(selectedFiles);

//     const imagesArray = selectedFilesArray.map((file) => {
//       return URL.createObjectURL(file);
//     });

//     setSelectedImages((previousImages) => previousImages.concat(imagesArray));

//     // FOR BUG IN CHROME
//     event.target.value = "";
//   };

//   function deleteHandler(image) {
//     setSelectedImages(selectedImages.filter((e) => e !== image));
//     URL.revokeObjectURL(image);
//   }

//   return (
//     <section>
//       <label>
//         + Add Images
//         <br />
//         <span>up to 10 images</span>
//         <input
//           type="file"
//           name="images"
//           onChange={onSelectFile}
//           multiple
//           accept="image/png , image/jpeg, image/webp"
//         />
//       </label>
//       <br />

//       <input type="file" multiple />

//       {selectedImages.length > 0 &&
//         (selectedImages.length > 10 ? (
//           <p className="error">
//             You can't upload more than 10 images! <br />
//             <span>
//               please delete <b> {selectedImages.length - 10} </b> of them{" "}
//             </span>
//           </p>
//         ) : (
//           <button
//             className="upload-btn"
//             onClick={() => {
//               console.log(selectedImages);
//             }}
//           >
//             UPLOAD {selectedImages.length} IMAGE
//             {selectedImages.length === 1 ? "" : "S"}
//           </button>
//         ))}

//       <div className="images">
//         {selectedImages &&
//           selectedImages.map((image, index) => {
//             return (
//               <div key={image} className="image">
//                 <img src={image} height="200" alt="upload" />
//                 <p>title</p>
//                 <button onClick={() => deleteHandler(image)}>
//                   delete image
//                 </button>
//                 <p>{index + 1}</p>
//               </div>
//             );
//           })}
//       </div>
//     </section>
   
//   )
// }

// export default Layout


