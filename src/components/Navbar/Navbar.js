import react, { Component } from 'react';
import './Navbar.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {

        const MenuItems = [
            {
                title: 'Home',
                url: '#',
                cName: 'nav-links'
            },
            {
                title: 'Perfil',
                url: '/profile',
                cName: 'nav-links'
            },
            {
                title: 'Categorias',
                url: '#',
                cName: 'nav-links'
            },
            {
                title: 'Sign up',
                url: '/',
                cName: 'nav-links-mobile'
            }
        
        ]

        return (
            
            <nav className="NavbarItems">
                
                <h1 className="navbar-logo">PickBorrow<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

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
                <Link to='/'>
                  <Button>Sign Up </Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar;