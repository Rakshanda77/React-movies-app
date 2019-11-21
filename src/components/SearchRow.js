import React, { Component } from 'react';
import axios from 'axios'
import SearchRow from '../containers/SearchContainer'
import { api_key, searchUrl } from '../config/api_config'

var a="movies"
class SearchRows extends Component{
  constructor (props){
    a=props.newvar;
    super(props)
    this.state= {
      option: props.option,
      rows: ''
    }
    this.makeSearch()
    }
  
    makeSearch = async (research) => {
    try {
    const url= searchUrl+"multi"+"?query="+a
    console.log(url)
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: research
    }
    
    })
    
    var searchRows = []
    //console.log(response)
    response.data.results.forEach((search)=>{
    search.poster_src = "https://image.tmdb.org/t/p/w185" + search.poster_path
    
    const searchRow = <SearchRow key={search.id} research={search} />
    searchRows.push(searchRow)
    })
    this.setState({rows:searchRows})
    } catch (error) {
    throw error
    }
    
    
}
componentWillUpdate(){
  this.makeSearch()
}
  render() {
    return (
    <div className="getData">

      {this.state.rows}
    
    </div>
    )
  }
}export default SearchRows;
