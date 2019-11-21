
import React, { Component } from 'react';
import { SearchBar } from 'react';
import {Container} from 'react';
import MovieRow from './MovieRow'

import '../App.css';


class MovieCategory extends Component {
  constructor (props){
    super(props)
    this.state= {
      query:'popular',
      x:""
    }
    
    }
 
   handleChange = event => {
     this.setState({
       query: event.target.value
     })

    new MovieRow({"option":event.target.value})
    
     
  }

 render() {
          var val=this.state.query
         
      function call (){ 
        return(<MovieRow option={val}/>)}
           
          return (
              <div className='data'>
            <form>
              {/* <input placeholder="Search" className='input' ref={input => this.search = input}
                onChange={this.handleInputChange} size = "50" />
                 */}
              <select className='SelectData'
              onChange={this.handleChange}
              value={this.state.query} >
              <option className='option1' value = "movies" selected id="basic-button">Select type</option>
                  <option value="now_playing">now_playing</option>
                  <option value = "popular">Popular</option>
                  <option value = "top_rated">top_rated</option> 
                  <option value = "upcoming">upcoming</option> 
                   </select>
            </form>

            {call()}
            
         </div>
          )
        }
       }
       export default MovieCategory
