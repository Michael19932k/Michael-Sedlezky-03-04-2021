import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAutocomplete } from '../redux/actions/autocompleteActions';
import { saveChosenCity } from '../redux/actions/autocompleteActions';
import { getDefaultWeather } from '../redux/actions/homeActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function AutocompleteInput() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
    const autoCompleteSuggestions = useSelector(state => state.autocomplete.autoCompleteSuggestions.map((city) => city));
    const error = useSelector(state => state.error);
    const chosenCity = useSelector(state => state.weather.chosenCity)
    const loading = open && autoCompleteSuggestions.length === 0;


    return (
        <Container maxWidth="xs">
            <Autocomplete
                id="asynchronous-demo"
                style={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => option.LocalizedName === value.LocalizedName}
                getOptionLabel={(option) => option.LocalizedName}
                onChange={(event, value) => {
                    dispatch(saveChosenCity(value));
                    dispatch(getDefaultWeather(chosenCity));
                }}
                options={autoCompleteSuggestions}
                loading={loading}
                value={value}
                autoComplete
                renderOption={option => (
                    <>{option.LocalizedName}</>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Asynchronous"
                        variant="outlined"
                        onChange={ev => {
                            if (ev.target.value !== "" || ev.target.value !== null) {
                                dispatch(getAutocomplete(ev.target.value));
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
            {error && <Typography>{error}</Typography>}
        </Container>
    );

}