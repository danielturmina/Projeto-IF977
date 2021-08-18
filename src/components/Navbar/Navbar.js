import react, { useState, Component } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
    const [clicked,setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

        const MenuItems = [
            {
                title: 'Home',
                url: '/',
                cName: 'nav-links'
            },
            {
                title: 'Perfil',
                url: '/profile',
                cName: 'nav-links'
            },
            {
                title: 'Anunciar',
                url: '#',
                cName: 'nav-links'
            },
            {
                title: 'Entrar',
                url: '/login',
                cName: 'nav-links-mobile'
            }
        
        ]

        return (
            <section>
            <nav className="NavbarItems">
                
                <h1 className="navbar-logo">Vai e Volta<img src ={logo} alt="Logo da plataforma"/></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
                    
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
                    
            </nav>
            
            </section>
        )
}

export default Navbar;