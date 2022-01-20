import React, {useState} from 'react';
import styled from 'styled-components';
import {CardBody,  Toast} from 'reactstrap';
/*Importing Images*/
import sun  from '../assets/sun-64.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import storm from '../assets/storm.png';
import sunClouded from '../assets/sun-clouded.png';
var icon = sun;


const WeatherCard = (props) => {
    const [weather] = useState(props.weather);
    /*Defining icon */
    if(weather.consolidated_weather[0].weather_state_abbr === "c"){
        icon = sun;
    }else if(weather.consolidated_weather[0].weather_state_abbr === "lc" || weather.consolidated_weather[0].weather_state_abbr === "hc"){
      icon = sunClouded;
    }else if(weather.consolidated_weather[0].weather_state_abbr === "t"){
      icon = storm;
    }else if(weather.consolidated_weather[0].weather_state_abbr === "sn"){
      icon = snow;
    }else{
      icon = rain;
    }
      return (
        <ContainerCard>
            <Toast>
              <CardBody>
                <WeatherIcon src={icon} />
                <CitieTitle tag="h2">{weather.title}</CitieTitle>
                <CardSubtitle>Temperatura : {weather.consolidated_weather[0].the_temp.toFixed(1)} ºC</CardSubtitle>
                <CardSubtitle>Mínima : {weather.consolidated_weather[0].min_temp.toFixed(1)} ºC</CardSubtitle>
                <CardSubtitle>Máxima : {weather.consolidated_weather[0].max_temp.toFixed(1)} ºC</CardSubtitle>
              </CardBody>
          </Toast>
        </ContainerCard>
          );
}


const CitieTitle = styled.h2`
  color: #16303d;
  text-align:center;
  font-weight:700;
  margin:20px 0;
`;

const ContainerCard = styled.div`
  margin: 50px 0 100px 0 !important;
`;

const WeatherIcon = styled.img`
  max-width:64px;
  margin:0 auto;
  display:block;
  width:100%;
`;
const CardSubtitle =styled.span`
  display:block;
  font-size:18px;
  color:rgb(51, 51, 51);
  margin-bottom:5px;
  text-align:center;
`
export default WeatherCard;