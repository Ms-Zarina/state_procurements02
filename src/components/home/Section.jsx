import icon1 from '../../assets/SVG.svg';
import icon2 from '../../assets/SVG (1).svg';
import icon3 from '../../assets/SVG (2).svg';
import '../home/section.css';
const Section = () => {
  return (
    <div id="section">
      <div className="container">
        <div className="section">
          <h3 className='section-title'>Крупные сделки</h3>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="blocks">
            <div className="block1">
              <div className="icon1">
                <img src={icon1} alt="" />
              </div>
              <h2>3,166,030,145</h2>
              <p>Гос затраты за 2023</p>
            </div>
            <div className="block2">
              <div className="icon2">
                <img src={icon2} alt="" />
              </div>
              <h2>
                3,622,983,057 <span>cом</span>
              </h2>
              <p>Гос переводы за 2023</p>
            </div>
            <div className="block3">
              <div className="icon3">
                <img src={icon3} alt="" />
              </div>
              <h2>48</h2>
              <p>Количество паставщиков</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
