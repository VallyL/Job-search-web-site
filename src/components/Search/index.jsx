import Rectangle12 from "../../assets/icons/Rectangle 12.svg";
import SearchLogo from "../../assets/icons/Поиск.svg";
import LocationLogo from "../../assets/icons/Локация.svg";
import styles from "../../components/Search/styles.module.css";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUniqueJobTitles,
  getUniqueLocations,
  handleSubmit,
} from "../SearchUtils";

function Search({ allVacancies }) {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const navigate = useNavigate();

  const uniqueJobTitles = getUniqueJobTitles(allVacancies);
  const uniqueLocations = getUniqueLocations(allVacancies);

  return (
    <div className={styles.searchContainer}>
      <div>
        <h1 className={styles.searchHeading}>
          One click and work in your pocket
        </h1>
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
            sx={{
              transition: "none",
            }}
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
                  transition: "none",
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
        <img src={Rectangle12} className={styles.backgroungImgF} />
      </div>
    </div>
  );
}

export default Search;
