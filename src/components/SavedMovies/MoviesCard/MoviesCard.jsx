import './MoviesCard.css';
import { getMoviesTime } from '../../../utils/GetMoviesTime';

function MoviesCard(props) {
  const { image, duration, nameRU, onDelete, _id } = props;

  return (
    <div className="SavedMoviesCard">
      <div className="SavedMoviesCard__wrapper">
        <img src={image} alt={nameRU} className="SavedMoviesCard__img"/>
      </div>
      <div className="SavedMoviesCard__content">
        <span className="MoviesCard__text">{nameRU}</span>
        <button className="SavedMoviesCard__icon" type="button" onClick={() => onDelete(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5.06055L6.65156 7.71211L7.71222 6.65145L5.06066 3.99989L7.71211 1.34844L6.65145 0.287781L4 2.93923L1.34826 0.287484L0.287598 1.34814L2.93934 3.99989L0.287484 6.65174L1.34814 7.7124L4 5.06055Z" fill="#fff"/>
          </svg>
        </button>
      </div>
      <span className="SavedMoviesCard__time">{getMoviesTime(duration)}</span>
    </div>
  )
}

export default MoviesCard;
