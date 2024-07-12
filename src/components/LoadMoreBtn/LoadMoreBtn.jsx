import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
    <button onClick={onClick} className={css.LoadMoreBtn}>
      Load more
    </button>
  </div>
  );
};

export default LoadMoreBtn;