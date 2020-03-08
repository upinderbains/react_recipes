import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { GET_RECIPE } from '../actions/types';
import Pagination from './Pagination';

import styles from './Results.module.css';

const Results = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const prev = pageNumber => setCurrentPage(pageNumber);

  const items = currentPosts
    ? currentPosts.map(result => {
        return (
          <li
          className={styles.list__item}
            onClick={() => props.getRecipe(result.recipe_id)}
            key={result.recipe_id}
          >
            <a className={styles.results__link} href='#23456'>
              <figure className={styles.results__fig}>
                <img src={result.image_url} alt='test' />
              </figure>
              <div className={styles.results__data}>
                <h4 className={styles.results__name}>{result.title}</h4>
                <p className={styles.results__author}>{result.publisher}</p>
              </div>
            </a>
          </li>
        );
      })
    : null;

  return (
    <div className={styles.results}>
      <ul className={styles.list}>{items}</ul>
      <Pagination
        prevPage={prev}
        currentPage={currentPage}
        postPerPage={postsPerPage}
        totalPosts={props.data.length}
        paginate={paginate}
      />
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getRecipe: async id => {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );
      dispatch({ type: GET_RECIPE, payload: res.data.recipe });
    }
  };
};
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
