import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ( {handleCountryChange} ) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <InputLabel id="countryId">Wybierz kraj</InputLabel>
            <Select labelId="countryId" id="selectCountry" defaultValue="Poland"
            onChange={(e) => handleCountryChange(e.target.value)} label="Country">
                <MenuItem value="">Global</MenuItem>
                {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default CountryPicker;