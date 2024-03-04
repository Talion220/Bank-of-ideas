import './userMenu.scss';

function UserMenu(){
    return(
        <div className='userMenu'>
            <p>Мои идеи</p>
            <button>Все идеи</button>
            <button>Одобренные</button>
            <button>Предложенные</button>
            <button>Опубликованные</button>
        </div>
        
    )
}

export default UserMenu;