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
        <img src={SearchLogo} className={styles.absolutLogoS} />
        <img src={LocationLogo} className={styles.absolutLogoL} />
        <Autocomplete
          sx={{
            border: "none",
            height: "100%",
            width: "50%",
          }}
          options={uniqueJobTitles}
          getOptionLabel={(option) => option}
          value={selectedPosition}
          onChange={(event, newValue) => setSelectedPosition(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Position"
              inputProps={{
                ...params.inputProps,
                autoComplete: "off",
              }}
              sx={{
                border: "none",
                transition: "none",
                minHeight: "100%",
                outline: "none",
                width: "100%",
              }}
            />
          )}
        />
        <Autocomplete
          sx={{
            width: "50%",
          }}
          className={styles.inputCity}
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
              sx={{
                width: "100%",
              }}
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
