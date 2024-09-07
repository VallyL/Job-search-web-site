import styles from "../../components/SmallSearch/styles.module.css";
import SearchLogo from "../../assets/icons/Поиск.svg";
import LocationLogo from "../../assets/icons/Локация.svg";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUniqueJobTitles,
  getUniqueLocations,
  handleSubmit,
} from "../SearchUtils";

function SmallSearch({ allVacancies }) {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const navigate = useNavigate();

  const uniqueJobTitles = getUniqueJobTitles(allVacancies);
  const uniqueLocations = getUniqueLocations(allVacancies);

  return (
    <div className={styles.searchContainer}>
      <p className={styles.perfectJob}>Find your perfect job:</p>
      <div className={styles.inputContainer}>
        <Autocomplete
          sx={{}}
          options={uniqueJobTitles}
          getOptionLabel={(option) => option}
          value={selectedPosition}
          onChange={(event, newValue) => setSelectedPosition(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Position"
              className={styles.inputPosition}
              inputProps={{
                ...params.inputProps,
                autoComplete: "off",
              }}
              sx={{}}
            />
          )}
        />
        <Autocomplete
          sx={{}}
          options={uniqueLocations}
          getOptionLabel={(option) => option}
          value={selectedLocation}
          onChange={(event, newValue) => setSelectedLocation(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="City, Country"
              className={styles.inputCity}
              inputProps={{
                ...params.inputProps,
                autoComplete: "off",
              }}
              sx={{}}
            />
          )}
        />

        <button
          className={styles.searchBtn}
          onClick={() =>
            handleSubmit(
              allVacancies,
              selectedPosition,
              selectedLocation,
              navigate
            )
          }
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SmallSearch;
