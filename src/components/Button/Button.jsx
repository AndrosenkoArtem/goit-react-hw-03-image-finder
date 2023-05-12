import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ setPage }) => {
  return (
    <button onClick={() => setPage()} className={style.Button}>
      Load more
    </button>
  );
};
Button.prototype = {
  setPage: PropTypes.func.isRequired,
};
