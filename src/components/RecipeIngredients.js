import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ADD_SHOPPINGLIST } from '../actions/types';
import styles from './RecipeIngredients.module.css';

const parseIng = recipeIng => {
  const unitsLong = [
    'tablespoons',
    'tablespoon',
    'ounces',
    'ounce',
    'teaspoons',
    'teaspoon',
    'cups',
    'pounds'
  ];
  const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
  const newIngredients = recipeIng.map(el => {
    let ingredient = el.toLowerCase();
    unitsLong.forEach((item, index) => {
      ingredient = ingredient.replace(item, unitShort[index]);
    });
    ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
    const arrIng = ingredient.split(' ');
    const unitIndex = arrIng.findIndex(el2 => unitShort.includes(el2));
    let objIng;
    if (unitIndex > -1) {
      const arrCount = arrIng.slice(0, unitIndex);
      let count;
      if (arrCount.length === 1) {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
      } else {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
      }
      objIng = {
        count,
        unit: arrIng[unitIndex],
        ingredient: arrIng.slice(unitIndex + 1).join(' ')
      };
    } else if (parseInt(arrIng[0], 10)) {
      objIng = {
        count: parseInt(arrIng[0], 10),
        unit: '',
        ingredient: arrIng.slice(1).join(' ')
      };
    } else if (unitIndex === -1) {
      objIng = {
        count: 1,
        unit: '',
        ingredient
      };
    }
    return objIng;
  });
  return newIngredients;
};

const RecipeIngredients = props => {
  if (Object.keys(props.recipeIngredients).length !== 0) {
    const parsedIng = parseIng(props.recipeIngredients.ingredients);
    return (
      <Fragment>
        <div className={styles.recipe__ingredients}>
          <ul className={styles.recipe__list}>
            {parsedIng.map((ing, index) => {
              return (
                <li key={index} className={styles.recipe__item}>
                  <div className={styles.recipe__count}>{ing.count}</div>
                  <div className={styles.recipe__ingredient}>
                    <span className={styles.recipe__unit}>{ing.unit + ' '}</span>
                    {ing.ingredient}
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => props.addToList(parsedIng)}
            className={styles.recipe__button}
          >
            <i class="fas fa-shopping-cart fa-x"></i>
            <span>Add to shopping list</span>
          </button>
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    recipeIngredients: state.recipe
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToList: item => dispatch({ type: ADD_SHOPPINGLIST, payload: item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIngredients);
