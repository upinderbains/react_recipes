import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SEARCH_RECIPE } from '../actions/types';
import axios from 'axios';

const Search = props => {
  const [search, setSearch] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.searchRecipe(search);
  };

  return (
    <div className='search_form'>
      <form onSubmit={onSubmit} className='search'>
        <input
          type='text'
          value={search}
          className='search_field'
          onChange={e => setSearch(e.target.value)}
          placeholder='Search over a million recipes...'
        />
        <button className='btn search_btn'>
          <i className='fas fa-search fa-2x'></i>
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps =  dispatch => {
  return {
    searchRecipe: async(item) => {
      const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?&q=${item}`);
      dispatch({ type: SEARCH_RECIPE, payload: res.data.recipes})
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
