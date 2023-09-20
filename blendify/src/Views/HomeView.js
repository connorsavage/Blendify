
export function HomeView({onLogout}) {
    //console.log(props)
    return (
        <div>
            <h2>Home View!</h2>
            <header>
                <nav>
                    <button> onClick={onLogout}Log Out</button>
                </nav>
            </header>
        </div>
    );
}