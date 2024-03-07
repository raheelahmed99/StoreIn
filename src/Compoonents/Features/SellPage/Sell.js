import React from 'react'
import styles from './style.module.css';

const Sell = () => {
  // let pic=document.querySelector(".pic")
    
    
  // document.getElementByClass('uploadBtn').addEventListener('click', function() {
  //    // click.preventDefault();
  //   document.getElementByClass('file-input').click();
    
  // });

  // document.getElementByClass('fileInput').addEventListener('change', function() {

  //   const file = this.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function(e) {
      
  //       // Display uploaded image
  //       const imgElement = document.createElement('img');
  //       imgElement.src = e.target.result;
  //      // document.body.appendChild(imgElement);
  //      pic.appendChild(imgElement)


  //     }
  //     reader.readAsDataURL(file);
  //     document.getElementById('upload-btn').disabled=true;
    
  //   }
  // });
  
  // document.getElementByClass('uploadForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent the default form submission
  //   // Here, you can handle the form submission, like sending data to a server
  //   alert('Form submitted successfully!');
  // });
    
  return (
    <>
     <div className={styles.container}>
       <form className="uploadForm"> 
        <h1 style={{color: '#fff'}}> Upload Product Data</h1>
  <div className={styles.inputContainer}>
   
    <input type="text" id="name" name="name" placeholder="Name" />
  </div>

  <div className={styles.inputContainer}>
    
    <input type="email" id="email" name="email" placeholder="Email" />
  </div>

  <div className={styles.inputContainer}>
    
    <input type="text" id="city" name="city" placeholder="City" />
  </div>

  <div className={styles.inputContainer}>
   
    <input type="text" id="product" name="product" placeholder="Product " />
  </div>
  <div className={styles.inputContainer}>
  
    <input type="number" id="price" name="price" placeholder="Price" />
  </div>
  
  <div className={styles.inputContainer}>
  <input type="file" style={{color: '#fff', paddingBottom: '10px'}} className={styles.fileInput} accept="image/*" />
</div>

  <div className={styles.pic}></div>

  <div className={styles.formBtn}>
  <button type="button" className={styles.uploadBtn}>Upload Picture</button>
  <button type="submit" className={styles.submitBtn}>Submit Form</button>
  </div>
 </form>
 </div>
    </>
  )
}

export default Sell
