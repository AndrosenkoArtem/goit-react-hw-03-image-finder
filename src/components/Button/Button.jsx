import style from 'styles.module.css';

export const Button = ({ setPage }) => {
  return (
    <button onClick={() => setPage()} className={style.Button}>
      Load more
    </button>
  );
};
