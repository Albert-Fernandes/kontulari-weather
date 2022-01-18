
import React, {  useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchBox from './components/SearchBox'
import api from './services/api';
import WeatherCard from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  /*Effect on card Change*/
  useEffect(() => {
    if(Object.keys({weather}).length === 0){
      api.get('/?location=Salvador').then((weather) => {
        setWeather(weather.data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
          setLoading(false)
      })
    }
  }, [weather])

  const Weather = loading || Object.keys(weather).length === 0 ? (<h3>Carregando...</h3> ) : (<WeatherCard weather ={weather} />)

  return (
    <Container>
        <SearchBox
          setWeather = {setWeather}
          setLoading = {setLoading}
        />
        {Weather}
    </Container>
  );
}

const Container = styled.div`
  background:red;
`
export default App;
