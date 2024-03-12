import arrowStage from '../../shared/images/arrowStage.svg'
import './homeStage.scss';

function HomeStage() {
  return (
    <div className='homeStage'>
      <h1>
        Как это работает?        
      </h1>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p className='stageElementTitle'>Публикация</p>
          <p>Вносите предложения по улучшению процесса компании или вашего подразделения и делитесь лучшими практиками.</p>
        </div>
      
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p className='stageElementTitle'>Рассмотрение</p>
          <p>Все предложения проходят экспертизу. Экспертом формируется оценка и заключение о возможности тиражирования.</p>
        </div>
      
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p className='stageElementTitle'>Поощрение</p>
          <p>За одобренные предложения и лучшие практики выплачивается поощрение.</p>
        </div>
     
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p className='stageElementTitle'>Реализация</p>
          <p>Одобренные экспертами предложения внедряются в жизнь компании и совершенствуют ежедневные процессы. Лучшие практики тиражируются на все общество.</p>
        </div>
      
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p className='stageElementTitle'>Вознаграждение за внедрение</p>
          <p>По факту внедрения подтверждается полученный экономический эффект и выплачивается вознаграждение участникам.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeStage;