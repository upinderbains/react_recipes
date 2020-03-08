import React from 'react';
import { connect } from 'react-redux';
import RecipeIngredients from './RecipeIngredients';
import { LIKED_RECIPES } from '../actions/types';

import styles from './Recipe.module.css';

const Recipe = props => {
  if (Object.getOwnPropertyNames(props.recipe).length !== 0) {
    const {
      title,
      publisher,
      source_url,
      image_url,
      ingredients
    } = props.recipe;
    // let time = Math.ceil(ingredients.length / 3);
    // time = time * 15;
    // const serving = 4;
    return (
      <div className={styles.recipe}>
        <figure className={styles.recipe__fig}>
          <img src={image_url} alt={title} className={styles.recipe__img} />
          <h1 className={styles.recipe__title}>{title}</h1>
        </figure>
        <div className={styles.recipe__details}>
          <div className={styles.recipe__info}>
            <i class='fas fa-stopwatch fa-2x'></i>
            <span className='recipe__info-data recipe__info-data--minutes'>
              {/* {time} */}
            </span>
            <span className={styles.recipe__text}> minutes</span>
          </div>
          <div className={styles.recipe__info}>
            <i class='fas fa-male fa-2x'></i>
            <span className='recipe__info-data recipe__info-data--people'>
              {/* {serving} */}
            </span>
            <span className={styles.recipe__text}> servings</span>
          </div>
          <button
            onClick={() => props.addToLikes(props.recipe)}
            className={styles.recipe__love}
          >
            <i className='fas fa-heart fa-2x'></i>
          </button>
        </div>
        <div className={styles.recipe__ingredients}>
          <ul className={styles.recipe__list}>
            <RecipeIngredients />
          </ul>
        </div>
        <div className={styles.recipe__directions}>
          <h2 className={styles.recipe__heading}>How to cook it</h2>
          <p className={styles.recipe__dirtext}>
            This recipe was carefully designed and tested by
            <span className={styles.recipe__by}>{` ${publisher}`}</span>. Please check
            out directions at their website.
          </p>
          <a className={styles.recipe__btn} href={source_url} target='_blank'>
           <span>Directions</span> 
            <i class='fas fa-caret-right fa-2x'></i>
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    recipe: state.recipe
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToLikes: item => dispatch({ type: LIKED_RECIPES, payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
