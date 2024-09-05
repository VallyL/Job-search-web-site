import ShowMore from "../../assets/icons/Vector 3.svg";
import { useState } from "react";
import styles from "../../components/Categories/styles.module.css";

function Categories({ allCategories }) {
  const [showMoreCateg, setShowMoreCateg] = useState(false);

  const handleShowMore = () => {
    setShowMoreCateg(!showMoreCateg);
  };

  const displayedCategories = showMoreCateg
    ? allCategories
    : allCategories.slice(0, 9);

  const buttonText = showMoreCateg ? "Show Less" : "More categories";

  return (
    <div className={styles.categoriesContainer}>
      <h3 className={styles.categoriesParph}>Jobs by category:</h3>
      <div className={styles.gridContainer}>
        {displayedCategories.map((category, index) => (
          <div key={index} className={styles.mainCategories}>
            <img src={category.src} alt={category.alt} />
            <p>{category.title}</p>
          </div>
        ))}
        <div onClick={handleShowMore} className={styles.showMoreLess}>
          <img src={ShowMore} />
          <p>{buttonText}</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
