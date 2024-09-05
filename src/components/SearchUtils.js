import { useNavigate } from "react-router-dom";

export const getUniqueJobTitles = (allVacancies) => {
  return Array.from(new Set(allVacancies.map((vacancy) => vacancy.title)));
};

export const getUniqueLocations = (allVacancies) => {
  return Array.from(new Set(allVacancies.map((vacancy) => vacancy.location)));
};

export const handleSubmit = (
  allVacancies,
  selectedPosition,
  selectedLocation,
  navigate
) => {
  navigate("/vacancies", {
    state: {
      selectedPosition: selectedPosition,
      selectedLocation: selectedLocation,
    },
  });
};
