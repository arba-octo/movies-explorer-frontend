import './Footer.css';
import { useLocation } from 'react-router-dom';
import { ROUTE_PROFILE } from '../../constants';

function Footer() {
  const location = useLocation();

  if (location.pathname === ROUTE_PROFILE) {
    return null;
  }

  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p className="Footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
        <div className="Footer__wrap">
          <a href="https://practicum.yandex.ru" className="Footer__praktikum" target="_blank" rel="noreferrer nofollow noopener">Яндекс.Практикум</a>
          <a href="https://github.com/arba-octo" className="Footer__github" target="_blank" rel="noreferrer nofollow noopener">Github</a>
          <span className="Footer__als">©2020</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
