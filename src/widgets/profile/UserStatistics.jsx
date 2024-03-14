import './userStatistics.scss';
import avatarBig from '../../shared/images/avatarBig.png';

function UserStatistics(){
    return(
        <div className='userStatistics'>
            <div className='userInfo'>
                <img src={avatarBig} alt="" />
                <div>
                    <h3>Кузнецова Анна Евгеньевна</h3>
                    <p>Дизайнер, Москва</p>
                </div>
            </div>
            <div className='userCards'>
                <div className='userCard'>
                    <p className='userCardCount'>12</p>
                    <p className='userCardDescription'>Всего идей</p>
                </div>
                <div className='userCard'>
                    <p className='userCardCount'>4</p>
                    <p className='userCardDescription'>Одобрено</p>
                </div>
                <div className='userCard'>
                    <p className='userCardCount'>8</p>
                    <p className='userCardDescription'>Предложено</p>
                </div>
                <div className='userCard'>
                    <p className='userCardCount'>3</p>
                    <p className='userCardDescription'>Отклонено</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default UserStatistics;