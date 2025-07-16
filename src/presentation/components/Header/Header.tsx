function Header () {
    return ( 
        <>
            <header className="flex justify-between items-center p-4 bg-black">
                <div className="text-xl font-bold text-white">Rémy Hamed</div>
                <nav>
                    <ul className="flex space-x-4 text-white">
                    <li><a href="#" className="hover:underline">Accueil</a></li>
                    <li><a href="#" className="hover:underline">Projets</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


export default Header
