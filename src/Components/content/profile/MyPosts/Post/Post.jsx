import c from './MyPosts.module.css'


export const MyPosts = () => {
    return (
        <div className={c.content}>
            <div>
                <img className={c.profileImage} src={'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png'} alt=''/>
            </div>
            <div>Avatar</div>
            <div>
                MyPosts
                <div>NewPost</div>
                <div className={c.posts}>
                    <div className={c.item}>
                        post1
                    </div>
                    <div className={c.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
};