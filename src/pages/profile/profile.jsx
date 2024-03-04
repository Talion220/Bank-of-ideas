import './profile.scss';
import UserMenu from "../../widgets/profile/userMenu";
import UserStatistics from "../../widgets/profile/userStatistics";
import UserIdeas from "../../widgets/profile/userIdeas";

function Profile(){
    return(
        <div>
            <UserMenu />
            <UserStatistics />
            <UserIdeas />
        </div>
    )
}

export default Profile;