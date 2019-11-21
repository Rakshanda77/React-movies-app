import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import '../App.css';
import TvRow from '../components/TvRow'
const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}))

  const TvContainer = props => {
    const classes = getStyles()
    const { show } = props
    // console.log(show)
    // console.log(show.name)
    // console.log(show.popularity)
    
    
     return(
  
     
   
    <div className="dataset">
         
        <div className="image"><img alt="poster" width="300" height="300" src={show.poster_src}/></div>
        <div className="other">
        <p>{show.name}</p>
        <p>Release Date:    { show.first_air_date} | {show.popularity}</p>
      
      
      <p>
      {show.overview}</p>
        </div>
  
     
    </div>

      );
    }

export default TvContainer