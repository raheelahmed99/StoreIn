import React, { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavbarFooter = ({children}) => {
const [showNavFooter, setShowNavFooter] = useState(false)
  const location = useLocation();
useEffect(() => {
 console.log('This is location', location)
 if(location.pathname === '/SignIn'){
  setShowNavFooter(false)
 }else{
  setShowNavFooter(true)
 }

}, [location])

  return (
    <>
    <div>{showNavFooter && children}</div>
    </>
  )
}

export default ShowNavbarFooter;
