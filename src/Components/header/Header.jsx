import c from './Header.module.css'

export const Header = () => {
    return (
        <div className={c.header}>
            <div>
                <img  className={c.logoIcon} src='https://cdn-icons-png.flaticon.com/512/50/50524.png'/>
            </div>
            <div>
                <a>React's Social Network</a>
            </div>
        </div>
    );
};