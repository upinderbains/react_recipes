import React from 'react';
import { connect } from 'react-redux';

const Results = props => {
  
   const items = props.data
      ? (props.data.map(result => {
          return (
            <li>
              <a className='results__link results__link--active' href='#23456'>
                <figure className='results__fig'>
                  <img src={result.img} alt='test' />
                </figure>
                <div className='result__data'>
                  <h4 className='result__name'>{result.title}</h4>
                  <p className='resuts__author'>{result.publisher}</p>
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

const mapStateToProps = state => {
  return {
     data: state.data
  };
};

export default connect(mapStateToProps)(Results);
