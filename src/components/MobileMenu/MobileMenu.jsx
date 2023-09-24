import './MobileMenu.css';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_MOBILE } from '../../constants';
import burgerClosed from '../../images/burger-closed.svg';

function MobileMenu() {
  const isOpen = false;

  return (
    <div className={`MobileMenu${isOpen ? ' MobileMenu--open': ''}`}>
      <div className="MobileMenu__container">
        <div className="MobileMenu__content">
          <ul className="MobileMenu__list">
            {NAVIGATION_MOBILE.map(item => (
              <li key={item.id}>
                <NavLink to={item.to} className="MobileMenu__link">{item.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="MobileMenu__footer">
          <NavLink to="/profile" className="MobileMenu__link">
            <div className="MobileMenu__profile-wrap">
              <span className="MobileMenu__profile-text">Аккаунт</span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="13" fill="#313131" />
                <path
                  fillRule="evenodd" clipRule="evenodd"
                  d="M14.4301 14.9678C15.7919 14.4057 16.7503 13.0648 16.7503 11.5C16.7503 9.42893 15.0714 7.75 13.0003 7.75C10.9293 7.75 9.25035 9.42893 9.25035 11.5C9.25035 13.0647 10.2087 14.4056 11.5705 14.9677C10.1758 15.1999 8.89287 15.7659 7.80859 16.5806L9.19015 18.4194C10.2514 17.6221 11.569 17.15 13.0001 17.15C14.4312 17.15 15.7488 17.6221 16.8101 18.4194L18.1916 16.5806C17.1074 15.766 15.8246 15.2 14.4301 14.9678Z"
                  fill="white"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <button type="button" className="MobileMenu__closed">
          <img src={burgerClosed} alt="закрыть меню"/>
        </button>
      </div>
    </div>
  )
}

export default MobileMenu;