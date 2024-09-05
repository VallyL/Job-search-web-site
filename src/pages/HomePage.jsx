import Search from "../components/Search";
import Partners from "../components/Partners";
import Categories from "../components/Categories";
import VacanciesList from "../components/Vacancies";

function HomePage({ allCategories, allVacancies }) {
  return (
    <>
      <Search allVacancies={allVacancies} />
      <Partners />
      <Categories allCategories={allCategories} />
      <VacanciesList
        allCategories={allCategories}
        allVacancies={allVacancies}
      />
    </>
  );
}

export default HomePage;
