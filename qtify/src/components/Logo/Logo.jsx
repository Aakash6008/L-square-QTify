import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import styles from "../Navbar/navbar.module.css";
const Logo = () => {
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={logoImg}
        alt="Logo"
        className={styles.img}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;