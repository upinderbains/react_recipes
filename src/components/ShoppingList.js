import React from 'react';
import { connect } from 'react-redux';
import { DELETE_INGREDIENT } from '../actions/types';

import styles from './ShoppingList.module.css';

const ShoppingList = props => {
  const items = props.shoppingList
    ? props.shoppingList.map((list, index) => {
        return (
          <li key={index} className={styles.shopping__item} >
            <div className={styles.shopping__count} >
              <p>{list.count}</p>
              <p>{list.unit}</p>
            </div>
            <p className={styles.shopping__description} >{list.ingredient}</p>
            <button
              onClick={() => props.deleteItem(index)}
              className={styles.shopping__delete}
            >
            <i className="fas fa-trash fa-2x"></i>
            </button>
          </li>
        );
      })
    : null;
  return (
    <div className={styles.shopping}>
      <h2 className={styles.heading}>My Shopping List</h2>
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: index => dispatch({ type: DELETE_INGREDIENT, payload: index })
  };
};
const mapStateToProps = state => {
  return {
    shoppingList: state.shoppingList
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
