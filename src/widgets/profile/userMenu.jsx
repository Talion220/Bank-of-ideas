import './userMenu.scss';

function UserMenu(){
    return(
        <div className='userMenu'>
            <h3>Мои идеи</h3>
            <button>Все идеи</button>
            <button>Одобренные</button>
            <button>Предложенные</button>
            <button>Опубликованные</button>
        </div>
        
    )
}

export default UserMenu;