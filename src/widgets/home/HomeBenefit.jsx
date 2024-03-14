import HomeBenefitImg1 from '../../shared/images/HomeBenefitImg1.jpg';
import HomeBenefitImg2 from '../../shared/images/HomeBenefitImg2.jpg';
import HomeBenefitImg3 from '../../shared/images/HomeBenefitImg3.jpg';
import HomeBenefitImg4 from '../../shared/images/HomeBenefitImg4.jpg';
import HomeBenefitImg5 from '../../shared/images/HomeBenefitImg5.png';
import './homeBenefit.scss';

function HomeBenefit() {
  return (
<div className='homeBenefit'>
      <h1>
        Выгоды от участия        
      </h1>
      <main>
        <article>
          <p>Получи признание за свой вклад в развитие компании</p>
          <img src={HomeBenefitImg1} alt="" />
        </article>
      
        <article>
          <p>Получи вознаграждение зв эффективные предложения</p>
          <img src={HomeBenefitImg2} alt="" />
        </article>
      
        <article>
          <p>Почувствуй улучшение в ежедневной деятельности</p>
          <img src={HomeBenefitImg3} alt="" />
        </article>
     
        <article>
          <p>Сформируй круг активных и неравнодушных коллег</p>
          <img src={HomeBenefitImg4} alt="" />
        </article>
      
        <article>
          <p>Будь примером для других коллег</p>
          <img src={HomeBenefitImg5} alt="" />
        </article>
      </main>
    </div>
  )
}

export default HomeBenefit;