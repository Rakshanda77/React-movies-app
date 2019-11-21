

import React,{ Component } from 'react';
import { Button, Select,TextField } from '@material-ui/core';
import '../App.css';
import SearchRows from './SearchRow';

class SearchBar extends Component {

  state = {
        query: '',
      }
     
      handleChange = event => {
        this.setState({
          query: event.target.value
        })
        new SearchRows({"newvar": this.state.query})
     }
render() {
 return (
      
 <div className='searchdata'>
  <form>
               <input placeholder="Search" className='input' 
               onChange={this.handleChange}
                size = "20" />
                <select className='SelectData'>
              <option className='option1' value = "movies" selected id="basic-button">Select type</option>
                  <option value="now_playing">Movie</option>
                  <option value = "popular">Multi</option>
                  <option value = "top_rated">Tv</option> 
                  </select>
</form>

            <Button class='submit'>SEARCH</Button>
             <p>{this.state.query}</p>  
    
    </div>
      
    )
}
}
export default SearchBar