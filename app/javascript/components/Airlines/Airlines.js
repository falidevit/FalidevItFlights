import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Airline from './Airline' 
import styled from 'styled-components'
import Header from './Header'

const Home =styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right:auto;
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`
const Airlines = () => 
{
    const [airlines, setAirLines] = useState([])
    useEffect(() => 
    {
        axios.get('/api/v1/airlines.json')
        .then(resp => {
            setAirLines(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [airlines.lenght])

    const grid = airlines.map( (airline, index) => {
        const { name, image_url, slug, average_score } = airline.attributes
    
        return (
          <Airline 
            key={index}
            name={name}
            image_url={image_url}
            slug={slug}
            average_score={average_score}
          />
        )
      })
    
    return (
        <Home>
            <Header/> 
                
            <Grid>{grid}</Grid>
        </Home>
    )
}

export default Airlines