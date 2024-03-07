import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import styles from './style.module.css'
import styled from 'styled-components'
function Header() {

    return (
        <>
        <div className={styles.header}>
            <div className='logo'>
           <Link  className={styles.linkComponent} to="/"> 
           <h1> 
                <i class="fa-solid fa-store" style={{marginLeft: '10px'}}></i>            
                  <span> </span>StoreIn</h1>
                 </Link> 
            </div>
            <div className={styles.searchInput}>
            <i style={{ color: "rgb(14, 26, 92)", paddingLeft: '20px'}} class="fa-solid fa-magnifying-glass"></i>
                <input type='text' name='searchProduct' placeholder='Find Producrts...'/>
            </div>
            
            <div className={styles.navLinks}>
                <Link className={styles.linkComponent} to="/SignIn"><i class="fa-solid fa-user"></i> Login</Link>
                <Link className={styles.linkComponent} to="/Sell"><i class="fa-solid fa-store"></i> Sell</Link>
            </div>
        </div>
        </>
    )
}

export default Header;
