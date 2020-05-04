import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
             <header><h1>Iron Lifestyle</h1> </header>
             <Link to= '/'><h3 style={{backgroundColor:'#2BBBAD',color:'white'}}>Home</h3></Link> 
             
            </div>
        );
    }
}

export default Header;