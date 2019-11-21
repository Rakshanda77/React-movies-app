import React, { Component } from 'react';
import axios from 'axios'
import TvRow from '../containers/MovieContainer'
import { api_key, movie } from '../config/api_config'

var a="popular"

class MovieRow extends Component{
  constructor (props){
    a=props.option;
  super(props)
    this.state= {
      option: props.option,
      rows: ''
    }
    
    this.makeSearch()
    this.modify(props)
    }
    getval(val){
      this.setState({
        option:val
      })
    }
    


    makeSearch = async (show) => {
    try {
    const url= movie+a
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: show
    }
    })
    var tvRows = []
    response.data.results.forEach((show)=>{
    show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
    
    const showRow = <TvRow key={show.id} show={show} />
    tvRows.push(showRow)
     })
    } catch (error) {
    throw error
    }
    this.setState({rows:tvRows})
    
  }
componentWillUpdate(){
    this.makeSearch()
}

modify(value){
  
 }

  render() {
    return (
    <div className="getData">
{this.state.rows}
        </div>
    )
  }
}export default MovieRow;
