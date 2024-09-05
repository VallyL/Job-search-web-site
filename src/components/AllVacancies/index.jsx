import styles from "../../components/AllVacancies/styles.module.css";
import { useLocation } from "react-router-dom";

function AllVacancies({
  allCategories,
  allVacancies,
  selectedPosition,
  selectedLocation,
}) {
  const filteredVacancies = allVacancies.filter((vacancy) => {
    const positionMatch = selectedPosition
      ? vacancy.title === selectedPosition
      : true;
    const locationMatch = selectedLocation
      ? vacancy.location === selectedLocation
      : true;
    return positionMatch && locationMatch;
  });

  return (
    <div className={styles.bigContainer}>
      {filteredVacancies.length > 0 ? (
        filteredVacancies.map((vacancy) => (
          <div key={vacancy.id} className={styles.vacancyDiv}>
            <span></span>
            <p className={styles.greyP}>{vacancy.category}</p>
            <h3 className={styles.mainTexyVaca}>{vacancy.title}</h3>
            <p className={styles.greyP}>{vacancy.location}</p>
            <p className={styles.companyName}>{vacancy.company}</p>
            <p className={styles.greyP}>{vacancy.postedDate}</p>
            <a href={vacancy.companyLink}>Company Link</a>
          </div>
        ))
      ) : (
        <p className={styles.noMatches}>No matching vacancies found.</p>
      )}
    </div>
  );
}

export default AllVacancies;
