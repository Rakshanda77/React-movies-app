import React, { Component } from 'react';
import axios from 'axios'
import SearchRow from '../containers/Search1Container'
import { api_key, searchUrl } from '../config/api_config'

var a="movies"
class SearchRows extends Component{
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
    
    makeSearch = async (research) => {
    try {
    //const url= searchUrl+"multi"+"?query="+"woman"
    const url =serachUrl+a
  
    const response = await axios.get(url, {
    params: {
    api_key: api_key,
    q: research
    }
    })
    
    var searchRows = []
    response.data.results.forEach((search)=>{
    search.poster_src = "https://image.tmdb.org/t/p/w185" + search.poster_path
    
    const searchRow = <SearchRow key={research.id} research={research} />
    searchRows.push(searchRow)
    })
    this.setState({rows:searchRows})
    } catch (error) {
    throw error
    }
}

  render() {
    return (
    <div className="getData">

      {this.state.rows}
    
    </div>
    )
  }
}export default SearchRows;
