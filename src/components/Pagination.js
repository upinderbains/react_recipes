import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  prevPage,
  currentPage
}) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const prev =
    currentPage > 1 ? (
      <li className={styles.list}>
        <a
          className={styles.list__item}
          onClick={() => prevPage(currentPage - 1)}
          href='#'
        >
          Previous
        </a>
      </li>
    ) : (
      ''
    );
  const nex =
    currentPage < pageNumbers.length ? (
      <li className={styles.list}>
        <a
          className={styles.list__item}
          onClick={() => prevPage(currentPage + 1)}
          href='#'
        >
          Next
        </a>
      </li>
    ) : (
      ''
    );
  return (
    <div className={styles.page_number}>
      <ul className={styles.page_list}>
        {prev}
        {pageNumbers.map(number => (
          <li
            className={number == currentPage ? styles.activeNumber : null}
            key={number}
          >
            <a
              className={styles.list__item}
              onClick={() => paginate(number)}
              href='#'
            >
              {number}
            </a>
          </li>
        ))}
        {nex}
      </ul>
    </div>
  );
};

export default Pagination;
