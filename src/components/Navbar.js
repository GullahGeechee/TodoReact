const NavBar = () => {
    return (
        <nav style={styles.navStyles}>
        <h1>Products App</h1>
        <ul><li>home</li>
            <li>Products</li>
            <lil>About Us</lil>
        </ul>
        </nav>
    );
};
const styles = {
    navStyles: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid red 2px',
        
    }
}

export default NavBar;