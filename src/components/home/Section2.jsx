import '../home/section2.css';
import img1 from "../../assets/image 2.png";
import img2 from "../../assets/image 3.png";
import img3 from "../../assets/image 4.png";

const Section2 = () => {
  return (
    <div id="Section2">
      <div className="container">
        <div className="section2">
          <h3 className='section2-title'>Новости и события</h3>
          <div className="circlee1"></div>
          <div className="circlee2"></div>
          <div className="blockss">
            <div className="blockk1">
              <img src={img1} alt="" />
              <p>В жилмассиве Ак-Босого построят новый сквер</p>
            </div>
            <div className="blockk2">
              <img src={img2} alt="" />
              <p>
                Театр оперы и балета закупает музыкальные инструменты на 23 млн
                сомов
              </p>
            </div>
            <div className="blockk3">
              <img src={img3} alt="" />
              <p>
                Объявлен тендер на капремонт здания Минкультуры почти на 29 млн
                сомов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
