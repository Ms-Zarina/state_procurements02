import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import '.././styles/layout.css';

function Header() {
  return (
    <div className="header_wrapper">
      <div className="container">
        <div className="header">
          <div >
            <Link className="header_logo" to={'/'}>
              <img src={logo} alt="logo" />
              <span className="logo-span">Гос закупки</span>
            </Link>
          </div>
          <div className="header_menu">
            <ul className="header_menu-list" id="link">
              <Link className="header_menu-link" to={'/announc'}>
                Обьявления
              </Link>
              <Link className="header_menu-link" to={'/reestr'}>
                Реестр
              </Link>
              <Link className="header_menu-link" to={'/complains'}>
                Жалобы
              </Link>
              <Link className="header_menu-link" to={'/help'}>
                Помощь
              </Link>
              <Link className="header_menu-link" to={'/contact'}>
                Контакты
              </Link>
            </ul>
          </div>
          <div className="header_auth">
            <button className="btn-log-in">
              <Link to={'/login'}>войти</Link>
            </button>
            <button className="btn-sign-in">
              <Link to={'/register'}>регистрация</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
