import Dropdown from 'react-bootstrap/Dropdown';
import { TbWorld } from 'react-icons/tb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <>
      <footer className="container">
        <Container>
          <Row className="layout-item">
            <Col>
              <p>¿Preguntas? Llama al 0800 345 1593</p>
            </Col>
          </Row>
          <Row className="layout-item">
            <Col md="auto">
              <li>Preguntas frecuentes</li>
              <li>Centro de ayuda</li>
              <li>Términos de uso</li>
              <li>Privacidad</li>
              <li>Preferencia de cookies</li>
            </Col>
            <Col md="auto">
              <li>Información corporativa</li>
              <li>Prensa</li>
              <li>Formas de ver</li>
              <li>Prueba de velocidad</li>
              <li>Relaciones con inversionistas</li>
            </Col>
            <Col md="auto">
              <li>Avisos legales</li>
              <li>Cuenta</li>
              <li>Empleo</li>
              <li>Contáctanos</li>
              <li>Sólo en RecFlix</li>
            </Col>
          </Row>
          <Row className="btn-dropdown">
            <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle variant="bg-dark border-light text-light" id="dropdown-autoclose-true">
                  <TbWorld /> Español
                </Dropdown.Toggle>

                <Dropdown.Menu variant='light'>
                  <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
                  <Dropdown.Item href="#/action-1"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="layout-item">
            <Col md="auto">
            <p>Netflix Argentina</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer