import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Footer, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  closeCollapse = collapseID => () => this.state.collapseID === collapseID && this.setState({ collapseID: '' });

  render() {
    const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.toggleCollapse('mainNavbarCollapse')} />;
    return (
      <Router>
        <div className="flyout">
          <Navbar color="green" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/" class = "Brand">
            <img src="img/LOGO.png" alt="" height="20" /> A52
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse('mainNavbarCollapse')} />
            <Collapse id='mainNavbarCollapse' isOpen={this.state.collapseID} navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink exact to="/" onClick={this.closeCollapse('mainNavbarCollapse')}>Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.closeCollapse('mainNavbarCollapse')} to="/css">Como Funciona</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.closeCollapse('mainNavbarCollapse')} to="/components">Ejemplos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.closeCollapse('mainNavbarCollapse')} to="/advanced">Registro</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          { this.state.collapseID && overlay}
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>

          <Footer color="green">
            <p className="footer-copyright mb-0 py-3 text-center">
              Created By Carlos Torres,using mdbootstrap with React
              
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
