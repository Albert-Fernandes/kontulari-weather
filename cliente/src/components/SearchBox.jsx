import React, {useState} from 'react';
import cities from '../cities';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import api from '../services/api';

/*Creating Search Box*/
const SearchBox = (props) => {
    const [location, setLocation] = useState([]);
    
    /*Defines the behavior of selected city*/
    const handleOnSelect = (location) => {
        props.setLoading(true);
        api.get(`/?location=${location.name}`).then((weather) => {
            props.setWeather(weather.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            props.setLoading(false);
        })
    }

    /*Compares if inputed string matches the cities on database*/
    const handleOnSearch = async(string, results) => {
        const result = cities.filter((location) => {
            return location.name.toLowerCase().includes(string.toLowerCase());
        });
        setLocation(result);
    }
    return (
            <div style={
                {
                    width:"100%",
                    zIndex:"9999",
                    marginBottom:"40px",
                }
            }>
                <ReactSearchAutocomplete 
                items={location} 
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autofocus 
                placeholder="Digite a cidade desejada"
                styling = {
                    {
                        marginBottom: "30px",
                        maxWidth:"700px",
                        width:"100%",
                    }
                }
                 />

            </div>
        );
}

export default SearchBox;