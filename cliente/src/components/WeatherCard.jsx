import React, {useState} from 'react';
import styled from 'styled-components';
import {Card, CardBody,  Toast, Row} from 'reactstrap';
/*Importing Images*/
import sun  from '../assets/sun-64.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import storm from '../assets/storm.png';
import sunClouded from '../assets/sun-clouded.png';
var icon = sun;


const WeatherCard = (props) => {
    const [weather] = useState(props.weather);
    var date = new Date();
    var weatherName = "";
    function SetDayName(datecode){
        var dateDay = "";
        if(datecode === 0 || datecode === 7){
            dateDay = "Domingo";
        }else if (datecode === 1 || datecode === 8 ){
          dateDay = "Segunda";
        }else if(datecode === 2){
          dateDay = "Terça";
        }else if(datecode === 3){
          dateDay = "Quarta";
        }else if (datecode === 4){
          dateDay = "Quinta";
        }else if (datecode === 5){
          dateDay = "Sexta";
        }else if(datecode === 6){
          dateDay = "Sábado";
        }
        return dateDay;
    }

    /*Defining icon */
    if(weather.consolidated_weather[0].weather_state_abbr === "c"){
        icon = sun;
        weatherName = "Ensolarado";
    }else if(weather.consolidated_weather[0].weather_state_abbr === "lc" || weather.consolidated_weather[0].weather_state_abbr === "hc"){
      icon = sunClouded;
      weatherName = "Nublado";
    }else if(weather.consolidated_weather[0].weather_state_abbr === "t"){
      icon = storm;
      weatherName = "Tempestade";
    }else if(weather.consolidated_weather[0].weather_state_abbr === "sn"){
      icon = snow;
      weatherName = "Neve";
    }else{
      icon = rain;
      weatherName = "Chuva";
    }
      return (
        <Row sm="2" md="3">
          <ContainerCard>
              <Card width="100%">
                <CardBody>
                  <WeatherIcon src={icon} />
                  <CitieTitle tag="h2">{weather.title}</CitieTitle>
                  <CardSubtitle>Previsão para : {SetDayName(date.getDay(weather.consolidated_weather[0].applicable_date))}</CardSubtitle>
                  <ForecastName>{weatherName}</ForecastName>
                  <CardSubtitle>Temperatura : {weather.consolidated_weather[0].the_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Mínima : {weather.consolidated_weather[0].min_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Máxima : {weather.consolidated_weather[0].max_temp.toFixed(1)} ºC</CardSubtitle>
                </CardBody>
            </Card>
          </ContainerCard>
          <ContainerCard>
              <Card>
                <CardBody>
                  <WeatherIcon src={icon} />
                  <CitieTitle tag="h2">{weather.title}</CitieTitle>
                  <CardSubtitle>Previsão para : {SetDayName(date.getDay(weather.consolidated_weather[1].applicable_date) + 1)}</CardSubtitle>
                  <ForecastName>{weatherName}</ForecastName>
                  <CardSubtitle>Temperatura : {weather.consolidated_weather[1].the_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Mínima : {weather.consolidated_weather[1].min_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Máxima : {weather.consolidated_weather[1].max_temp.toFixed(1)} ºC</CardSubtitle>
                </CardBody>
            </Card>
          </ContainerCard>
          <ContainerCard>
              <Card>
                <CardBody>
                  <WeatherIcon src={icon} />
                  <CitieTitle tag="h2">{weather.title}</CitieTitle>
                  <CardSubtitle>Previsão para : {SetDayName(date.getDay(weather.consolidated_weather[2].applicable_date) + 2)}</CardSubtitle>
                  <ForecastName>{weatherName}</ForecastName>
                  <CardSubtitle>Temperatura : {weather.consolidated_weather[2].the_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Mínima : {weather.consolidated_weather[2].min_temp.toFixed(1)} ºC</CardSubtitle>
                  <CardSubtitle>Máxima : {weather.consolidated_weather[2].max_temp.toFixed(1)} ºC</CardSubtitle>
                </CardBody>
            </Card>
          </ContainerCard>
        </Row>
          );
}


const CitieTitle = styled.h2`
  color: #16303d;
  text-align:center;
  font-weight:700;
  margin:20px 0;
`;

const ContainerCard = styled.div`
  margin-bottom: 20px  !important;
  position: relative;
  z-index: 1;
`;

const ForecastName = styled.div`
  position: absolute;
  top: 10px;
  right:20px;
  background-color:#16303d;
  color:#fff;
  display:inline-block;
  padding:10px;
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