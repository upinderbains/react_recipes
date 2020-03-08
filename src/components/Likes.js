import React from 'react';
import { connect } from 'react-redux';
import styles from './Likes.module.css';

const Likes = props => {
  const item = props.likedRecipes.map(like => {
    return (
      <li key={like.recipe_id}>
        <a className={styles.likes__link} href={like.source_url}>
          <figure className={styles.likes__fig}>
            <img src={like.image_url} alt='Test' />
          </figure>
          <div className={styles.likes__data}>
            <h4 className={styles.likes__name}>{like.title}</h4>
            <p className={styles.likes__author}>{like.publisher}</p>
          </div>
        </a>
      </li>
    );
  });
  return (
    <div className={styles.likes}>
      <div className={styles.likes__field}>
      <i className='fas fa-heart fa-2x'></i>
      </div>
      <div className={styles.likes__panel}>
        <ul className={styles.likes__list}>{item}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    likedRecipes: state.likes
  };
};
export default connect(mapStateToProps)(Likes);
