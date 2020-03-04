import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { GET_RECIPE } from '../actions/types'

const Results = props => {
  
   const items = props.data
      ? (props.data.map(result => {
          return (
            <li onClick={() => props.getRecipe(result.recipe_id)} key={result.recipe_id}>
              <a className='results__link results__link--active' href='#23456'>
                <figure className='results__fig'>
                  <img src={result.image_url} alt='test' />
                </figure>
                <div className='results__data'>
                  <h4 className='results__name'>{result.title}</h4>
                  <p className='results__author'>{result.publisher}</p>
                </div>
              </a>
            </li>
          );
        }))
      : null;

  return (
    <div className='results'>
      <ul className='results__list'>{items}</ul>
    </div>
  );
};
const mapDispatchToProps =  dispatch => {
  return {
    getRecipe: async(id) => {
      const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
      dispatch({ type: GET_RECIPE, payload: res.data.recipe})
    }
  };
};
const mapStateToProps = state => {
  return {
     data: state.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
