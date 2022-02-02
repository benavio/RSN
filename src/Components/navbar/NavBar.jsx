import c from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.itemActive}`} >
                <a href='#'>Profile</a>
            </div>
            <div className={`${c.item} ${c.itemActive}`}>
                <a href='#'>Messages</a>
            </div>
            <div className={`${c.item} ${c.itemActive}`}>
                <a href='#'>News</a>
            </div >
            <div className={`${c.item} ${c.itemActive}`}>
                <a href='#'>Music</a>
            </div>
            <div className={`${c.item} ${c.itemActive}`}>
                <a href='#'>Setting</a>
            </div>
        </nav>
    );
};