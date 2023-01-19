//2ways to export
export const Title = () => (
    <a href="/">
        <img
            alt="logo"
            className="logo"
            src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
    </a>
);

 const Header = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
); 

export default Header;