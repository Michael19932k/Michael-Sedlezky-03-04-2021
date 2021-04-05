import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import { addFavorite, deleteFavorite } from '../redux/actions/favoritesListActions';


const AddFavoriteButton = () => {
    const dispatch = useDispatch()
    const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
    const chosenCity = useSelector(state => state.weather.chosenCity)
    const defaultCurrentConditions = useSelector(state => state.weather?.defaultWeather[0]);
    const [state, setState] = useState({ checked: false });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });

        console.log(state.checked)
    };
    console.log(chosenCity)
    console.log(defaultCurrentConditions)

    const statusCheck = favoriteList.find(city => city.Key === chosenCity.Key)
    useEffect(() => {
        if (statusCheck && !state.checked) {
            setState({ checked: true })
        }
    }, [statusCheck])


    // console.log(favoriteList.find(city=>city.Key===chosenCity.Key))

    useEffect(() => {
        console.log('kaha pamim')
        if (state.checked === true && !statusCheck) {
            dispatch(addFavorite(chosenCity, defaultCurrentConditions));
        }
        if (state.checked === false) {
            dispatch(deleteFavorite(chosenCity.Key));
        }
    }, [state.checked]);

    return (

        <FormGroup>
            <FormControlLabel
                control={<Switch
                    label="Gilad Gray"
                    checked={state.checked}
                    onChange={handleChange}
                    color="primary"
                    name="checked"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />}
                label="Gilaxxxxxxxxxxxxxxxxxd Gray"
            />
        </FormGroup>

    );

}
export default AddFavoriteButton