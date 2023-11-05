import search from '../../assets/search-icon.svg';
import './public1.css';
function Public() {
  return (
    <div className="public-wrapp">
      <div className="inp-pub input_wrapp">
        <div className="input_icon">
          <img src={search} alt="search-icon" className="img-icon" />
        </div>
        <input className='public-inp' type="text" placeholder="       введите номер объявления" />
      </div>
      <button className="btn-pub btn-log-in ">Поиск</button>
    </div>
  );
}

export default Public;
