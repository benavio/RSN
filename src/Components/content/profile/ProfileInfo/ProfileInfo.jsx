import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img className={c.profileImage}
                     src={'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png'}/>
            </div>
            <div>Avatar</div>
            <MyPosts />
        </div>
    );
};