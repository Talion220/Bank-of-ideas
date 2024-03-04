import './profile.scss';
import UserMenu from "../../widgets/profile/userMenu";
import UserStatistics from "../../widgets/profile/userStatistics";
import UserIdeas from "../../widgets/profile/userIdeas";

function Profile(){
    return(
        <div className='profile'>
            <UserMenu />
            <div className='userContent'>
                <UserStatistics />
                <UserIdeas />
            </div>
            
        </div>
    )
}

export default Profile;