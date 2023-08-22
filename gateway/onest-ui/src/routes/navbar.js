import { Col, Container, Image, Navbar, Row } from 'react-bootstrap';

function  OnestNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home"> <Image src="./onestlogoFinal.png" width={'156'} height={'45'} rounded /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <span>Open Network for Education and Skilling Transactions </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  OnestNavbar;