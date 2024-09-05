import DisneyLogo from "../../assets/icons/Vector (1).svg";
import Facebook from "../../assets/icons/Group 2.svg";
import Microsoft from "../../assets/icons/Mask group.svg";
import Sony from "../../assets/icons/Vector (1) copy.svg";
import CocaCola from "../../assets/icons/Group.svg";
import styles from "../../components/Partners/style.module.css";
const imagesData = [
  {
    src: DisneyLogo,
    alt: "Disney",
  },
  {
    src: Facebook,
    alt: "Facebook",
  },
  {
    src: Microsoft,
    alt: "Microsoft",
  },
  {
    src: Sony,
    alt: "Sony",
  },
  {
    src: CocaCola,
    alt: "CocaCola",
  },
];

function Partners() {
  return (
    <div className={styles.partnerContainer}>
      <p className={styles.partnerParagraph}>We'll help you find a job at:</p>
      <div className={styles.imagContainer}>
        {imagesData.map((Image, index) => (
          <img
            key={index}
            src={Image.src}
            alt={Image.alt}
            className={styles.imagesArr}
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;
