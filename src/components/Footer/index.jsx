import Linkedln from "../../assets/icons/Vector (1) copy 8.svg";
import GoogleLogo from "../../assets/icons/Group 15.svg";
import Twitter from "../../assets/icons/Group 16.svg";
import Facebook from "../../assets/icons/feFacebook0.svg";
import LogoCopy from "../../assets/icons/Cooljob copy.svg";
import styles from "../../components/Footer/styles.module.css";
import { Link } from "react-router-dom";
const smallLogos = [
  {
    src: Linkedln,
    alt: "Linkedln",
  },
  {
    src: GoogleLogo,
    alt: "Google",
  },
  {
    src: Twitter,
    alt: "Twitter",
  },
  {
    src: Facebook,
    alt: "Facebook",
  },
];
const cities = [
  "Osaka",
  "Koyan",
  "Tokyo",
  "Hakone",
  "Naeba",
  "Tomamu",
  "Yokohama",
  "Hakor",
  "Sapporo",
  "Kobe",
];

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h4 className={styles.popularCities}>Popular cities</h4>
      <div className={styles.citiesContainer}>
        {cities.map((city, index) => (
          <a href="#" key={index}>
            {city}
          </a>
        ))}
      </div>
      <hr></hr>
      <div className={styles.logosContainer}>
        <Link to="/">
          <img src={LogoCopy} alt="Logo" />
        </Link>
        <div className={styles.smallerLogoDiv}>
          {smallLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
