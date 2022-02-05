
import React, {  useEffect, useState } from 'react'
import {Container, Row} from 'reactstrap';
import styled from 'styled-components';
import SearchBox from './components/SearchBox'
import api from './services/api';
import WeatherCard from './components/WeatherCard';
import HeaderContent from './components/Header'
import Footer   from './components/Footer';
import  loadingGif from './assets/loading.gif'
import './assets/css/main.css'

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  /*Effect on card Change*/
  useEffect(() => {
    if(Object.keys(weather).length === 0){
      api.get('/?location=Salvador').then((weather) => {
        setWeather(weather.data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
          setLoading(false);
      })
    }
  }, [weather])

  const Weather = loading || Object.keys(weather).length === 0 ? (<img class="loadingGiff" src={loadingGif} />) : (<WeatherCard weather ={weather} />)

    return (
      <Main>
        <HeaderContent></HeaderContent>
        <Container>
          <Row>
              <SearchBox
                setWeather = {setWeather}
                setLoading = {setLoading}
              />
            </Row>
            {Weather}
        </Container>
        <Footer />
      </Main>
    );
}

const Main = styled.section`
  background-color:#fff;
`;

export default App;
