import styles from './NavBar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {

    return (
        <div className={styles.navbarDiv}>
            <div className={styles.navlinkDiv}>
              <Navbar variant="light" bg="none" expand="sm" >
                <Container fluid className='d-flex justify-content-center'>
                    <Navbar.Brand href="#home" className='col-sm-6 col-md-8 col-lg-9'><h1>Dariusz Biernat</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" className='mb-3' />
                    <Navbar.Collapse id="navbar-dark-example">
                      <Nav >
                        <ul>
                          <li><p>O mnie</p></li>
                          <li><p>Projekty</p></li>
                          <li><p>Kontakt</p></li>
                        </ul>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
        </div>
    );
};

export default NavBar;