import logoImg from "../../assets/logo.svg";
import Search from "../Search/Search.jsx";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback.jsx";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ data, page, songsData }) => {

  let navigate = useNavigate();
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    let feedback = document.getElementById("feedback");
    let body = document.body;
    if (isFeedbackClicked) {
      body.style.overflowY = "hidden";
      feedback?.classList.add("feedbackClicked");
    } else {
      body.style.overflowY = "auto";
      feedback?.classList.remove("feedbackClicked");
    }
  }, [isFeedbackClicked]);

  return (
    <>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
      <nav className={styles.nav}>
      <img
        src={logoImg}
        alt="Logo"
        className={styles.img}
        onClick={() => navigate("/")}
      />
   
        <Search data={page === "home" ? data : songsData} page={page} />
        <Button
          text="GIVE FEEDBACK"
          eventHandler={{ event: "onClick", handler: handleClick }}
        />
      </nav>
    </>
  );
};

export default Navbar;