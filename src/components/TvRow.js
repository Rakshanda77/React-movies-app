import React, { Component } from 'react';
import axios from 'axios'
import TvRow from '../containers/TvContainer'
import { api_key, TV_URL } from '../config/api_config'

var a="popular"
class TvRows extends Component{constructor (props){
  a=props.values;
  console.log(a)
super(props)
  this.state= {
    option: props.values,
    rows: ''
  }
  
  this.makeSearch()
  this.modify(props)
  }
  getval(val){
    this.setState({
      values:val
    })
  }
  makeSearch = async (show) => {
    try {
const url= TV_URL+a

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
    this.setState({rows:tvRows})
    } catch (error) {
    throw error
    }
}
componentDidMount(){
  this.makeSearch()

}
componentWillUpdate(){
  this.makeSearch()
}
modify(value){
  
}

  render() {
    return (
    <div className="getdata">

      {this.state.rows}
    
    </div>
    )
  }
}export default TvRows;
