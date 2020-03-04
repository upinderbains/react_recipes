import React from 'react';
import { connect } from 'react-redux';

const Recipe = props => {
  if (props.recipe) {
    const {
      title,
      source_url,
      image_url,
      publisher,
      ingredients
    } = props.recipe;
    let time = Math.ceil(ingredients.length / 3);
    time = time * 15;
    const serving = 4;
    return (
      <div className='recipe'>
        <figure className='recipe__fig'>
          <img src={image_url} alt={title} className='recipe__img' />
          <h1 className='recipe__title'>
            <span>{title}</span>
          </h1>
        </figure>
        <div className='recipe__details'>
          <div className='recipe__info'>
            <svg className='recipe__info-icon'>
              <use href='img/icons.svg#icon-stopwatch'></use>
            </svg>
            <span className='recipe__info-data recipe__info-data--minutes'>
              {time}
            </span>
            <span className='recipe__info-text'> minutes</span>
          </div>
          <div className='recipe__info'>
            <svg className='recipe__info-icon'>
              <use href='img/icons.svg#icon-man'></use>
            </svg>
            <span className='recipe__info-data recipe__info-data--people'>
              {serving}
            </span>
            <span className='recipe__info-text'> servings</span>
            <div className='recipe__info-buttons'>
              <button className='btn-tiny'>
                <svg>
                  <use href='img/icons.svg#icon-circle-with-minus'></use>
                </svg>
              </button>
              <button className='btn-tiny'>
                <svg>
                  <use href='img/icons.svg#icon-circle-with-plus'></use>
                </svg>
              </button>
            </div>
          </div>
          <button className='recipe__love'>
            <svg className='header__likes'>
              <use href='img/icons.svg#icon-heart-outlined'></use>
            </svg>
          </button>
        </div>
        <div className='recipe__ingredients'>
          <ul className='recipe__ingredient-list'>
            <li className='recipe__item'>
              <svg className='recipe__icon'>
                <use href='img/icons.svg#icon-check'></use>
              </svg>
              <div className='recipe__count'>1000</div>
              <div className='recipe__ingredient'>
                <span className='recipe__unit'>g</span>
                pasta
              </div>
            </li>
          </ul>
          <button className='btn-small recipe__btn'>
            <svg className='search__icon'>
              <use href='img/icons.svg#icon-shopping-cart'></use>
            </svg>
            <span>Add to shopping list</span>
          </button>
        </div>
        <div className='recipe__directions'>
          <h2 className='heading-2'>How to cook it</h2>
          <p className='recipe__directions-text'>
            This recipe was carefully designed and tested by
            <span className='recipe__by'>{publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            className='btn-small recipe__btn'
            href={source_url}
            target='_blank'
          >
            <span>Directions</span>
            <svg className='search__icon'>
              <use href='img/icons.svg#icon-triangle-right'></use>
            </svg>
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

export default connect(mapStateToProps)(Recipe);
