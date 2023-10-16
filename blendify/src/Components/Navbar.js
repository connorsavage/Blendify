const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Meet the Developers</a>
                </li>
                <li>
                    <a href="/">FAQ</a>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar

//https://www.youtube.com/watch?v=5I_uGo8-jPs&list=PL9LZM-hWdUvspSZa2EMvnGbZclySfLhnk&index=1
