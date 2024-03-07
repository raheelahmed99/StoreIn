import React, {useState} from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
const SignIn = () => {

  return (
    <>
    
    <div className={styles.container}>
    
    <br/>
    <div className={styles.formDiv}>
    <h1 style={{textAlign: 'center', color: '#fff', marginBottom: '50px'}}>let's Sign In</h1>
    <form>
        <input type="text" placeholder="Email Address" class="txtfield"  required/><br/>
        <input type="password" placeholder="Password" class="txtfield" required/>

        <div className={styles.buttons}>
            <Link to='/' className={styles.btngroup}> Log In</Link>
            <Link to='#' className={styles.btngroup}> Sing Up</Link>
            <br/>
            
        </div>
        <a href="#"> Forgot Password</a>

    </form>
    </div>
</div>
    </>
  )
}

export default SignIn
