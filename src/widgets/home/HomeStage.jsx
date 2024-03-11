import arrowStage from '../../shared/images/arrowStage.svg'

function HomeStage() {
  return (
    <div>
      <h1>
        Как это работает?        
      </h1>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p>Публикация</p>
          <div>Вносите предложения по улучшению процесса компании или вашего подразделения и делитесь лучшими практиками.</div>
        </div>
      </div>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p>Рассмотрение</p>
          <div>Все предложения проходят экспертизу. Экспертом формируется оценка и заключение о возможности тиражирования.</div>
        </div>
      </div>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p>Поощрение</p>
          <div>За одобренные предложения и лучшие практики выплачивается поощрение.</div>
        </div>
      </div>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p>Реализация</p>
          <div>Одобренные экспертами предложения внедряются в жизнь компании и совершенствуют ежедневные процессы. Лучшие практики тиражируются на все общество.</div>
        </div>
      </div>
      <div className='stageContainer'>
        <div className='stageElement'>
          <img src={arrowStage} alt="" />
          <p>Вознаграждение за внедрение</p>
          <div>По факту внедрения подтверждается полученный экономический эффект и выплачивается вознаграждение участникам.</div>
        </div>
      </div>
    </div>
  )
}

export default HomeStage;