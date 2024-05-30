import LogoImage from "../../assets/logo.svg";
import Search from "../Search/Search.jsx";
import Button from "../Button/Button.jsx";
// import { useEffect, useState } from "react";
// import Feedback from "../Feedback/Feedback.jsx";
import styles from "./navbar.module.css";

export default function Navbar(){
  return(
      <>
          <nav className={styles.navbar}>
              <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
               <Search search={"Search a song of your choice"}/>
              <Button children="Give Feedback"/>
          </nav>
      </>
  )
}