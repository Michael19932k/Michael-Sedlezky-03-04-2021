import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { addFavorite, deleteFavorite } from '../redux/actions/favoritesListActions';


const AddFavoriteButton = () => {
    const dispatch = useDispatch()
    const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
    const chosenCity = useSelector(state => state.weather.chosenCity)
    const defaultCurrentConditions = useSelector(state => state.weather?.defaultWeather[0]);
    const [state, setState] = useState({ checked: false });
    const [toggleText, setToggleText] = useState('Add to favorites');

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const statusCheck = favoriteList.find(city => city.Key === chosenCity.Key)
    useEffect(() => {
        if (statusCheck && !state.checked) {
            setState({ checked: true })
        }
        // if (statusCheck===undefined && state.checked) {
        //     setState({ checked: false })
        // }
    }, [statusCheck])

    useEffect(() => {
        if (state.checked === false) {
            setToggleText('Add to Favorites')
        }
        if (state.checked === true) {
            setToggleText('Remove from Favorites')
        }
    }, [state.checked])

    useEffect(() => {
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
                label={toggleText}
            />
        </FormGroup>

    );

}
export default AddFavoriteButton