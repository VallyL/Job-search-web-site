import { useState } from "react";
import styles from "../../components/Vacancies/styles.module.css";
import { Link } from "react-router-dom";

function VacanciesList({ allVacancies, allCategories, category }) {
  return (
    <div className={styles.vacancyComtainer}>
      <h1>New vacancies:</h1>
      <p>Find your dream job now</p>
      <div className={styles.smallContainer}>
        {allCategories.slice(0, 2).map((category) => (
          <div key={category.title}>
            <h2 className={styles.categoryName}>{category.title}</h2>
            <div className={styles.categoryContainer}>
              {allVacancies
                .filter((vacancy) => vacancy.category === category.title)
                .map((vacancy) => (
                  <div key={vacancy.id} className={styles.vacancyDiv}>
                    <span></span>
                    <p className={styles.greyP}>{vacancy.category}</p>
                    <h3 className={styles.mainTexyVaca}>{vacancy.title}</h3>
                    <p className={styles.greyP}>{vacancy.location}</p>
                    <p className={styles.companyName}>{vacancy.company}</p>
                    <p className={styles.greyP}>{vacancy.postedDate}</p>
                    <a href={vacancy.companyLink}>Company Link</a>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/vacancies" className={styles.showMoreBtn}>
        Show More
      </Link>
    </div>
  );
}

export default VacanciesList;
