import React, {useEffect, useState} from 'react';
import styles from './style.module.css';

const Api =  "https://fakestoreapi.com/products";
const fetchApiData = () => fetch(Api).then(res => res.json());

const ProductCategoury = () => {
const [data , setData] = useState([]);

useEffect(() => {
    fetchApiData().then(data => setData(data));
},
[]);

  return (
    <>
    <div className={styles.container1}>
     <h2> All Categories</h2>
    <div className={styles.containerBox}>
        
        <div className={styles.box}> 
            <i style={{color: 'green'}} class="fa-solid fa-motorcycle fa-3x" ></i>
        </div>
        <div className={styles.box}>
         <i style={{color: 'tomato'}} class="fa-solid fa-car fa-3x" ></i>
        </div>
        <div className={styles.box}>
            <i style={{color: 'blueviolet'}} class="fa-solid fa-city fa-3x" ></i>
        </div>
        <div className={styles.box}> 
            <i style={{color: 'blue'}} class="fa-solid fa-mobile-screen-button fa-3x" ></i>
        </div>
    </div>
    </div>
     

    <div   className={styles.container2}>
                  {data.map((data) => (
    
    <div key={data.id} className={styles.productBox}>
      <img src={data.image} style={{width: '230px', height: '180px', alignSelf: 'center'}} alt='image' />
      <h4 style={{fontFamily: 'Poppins'}}>${data.price}</h4>
      <h3  style={{fontFamily: 'Poppins', fontSize: '12px'}}>{data.title}</h3>
    </div>
    
   ))
    } 
    </div>
    </>
  )
}

export default ProductCategoury
