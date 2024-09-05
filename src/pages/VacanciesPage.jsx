import AllVacancies from "../components/AllVacancies";
import SmallSearch from "../components/SmallSearch";

function VacanciesPage({ allCategories, allVacancies }) {
  return (
    <>
      <SmallSearch allVacancies={allVacancies} />
      <AllVacancies allCategories={allCategories} allVacancies={allVacancies} />
    </>
  );
}

export default VacanciesPage;
