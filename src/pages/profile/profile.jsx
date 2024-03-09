import './profile.scss';
import UserMenu from "../../widgets/profile/UserMenu";
import UserStatistics from "../../widgets/profile/UserStatistics";
import UserIdeas from "../../widgets/profile/UserIdeas";

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