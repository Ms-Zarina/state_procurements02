import search from '../../assets/search-icon.svg';
import vector from '../../assets/vector.png'
import './title.css';
import '.././styles/layout.css';


function Title() {
  return (
    <div className="home-title">
      <div className="title_left">
        <h1 className='title_text'>Добро пожаловать на сайт гос закупок</h1>
        <span className='title_descr'>Проставщики Кыргызской Республики</span>
        <div className="input_wrapp">
          <div className="input_icon">
            <img src={search} alt="search-icon" className='img-icon' />
          </div>
          <input type="text" placeholder="       введите запрос" />
        </div>
        <button className='btn-log-in '>Поиск</button>
      </div>
      <div className="title_rigth">
        <img src={vector} alt="vector"  className='img-vector'/>
      </div>
    </div>
  );
}

export default Title;
