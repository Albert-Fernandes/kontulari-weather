import React, {useState} from 'react';
import styled from 'styled-components';

const WeatherCard = (props) => {

    const [weather] = useState(props.weather);

    return ( <Card>
                    <h2>{weather.title}</h2>
                    <div>{weather.consolidated_weather[0].the_temp.toFixed(1)}</div>
            </Card>)
}
const Card = styled.div`
  background:red;
`;
export default WeatherCard;