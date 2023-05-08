import Dropdown from 'react-bootstrap/Dropdown';
import { TbWorld } from 'react-icons/tb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <Container className={`${styles.layoutItem} ${styles.background}`}>
      <Row className='mx-3'>
        <Col md="auto">
          <p>¿Preguntas? Llama al 0800 345 1593</p>

        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Centro de ayuda</li>
            <li>Términos de uso</li>
            <li>Privacidad</li>
            <li>Preferencia de cookies</li>
          </ul>
        </Col>
        <Col md="auto">
          <ul>
            <li>Información corporativa</li>
            <li>Prensa</li>
            <li>Formas de ver</li>
            <li>Prueba de velocidad</li>
            <li>Relaciones con inversionistas</li>
          </ul>
        </Col>
        <Col md="auto">
          <li>Avisos legales</li>
          <li>Cuenta</li>
          <li>Empleo</li>
          <li>Contáctanos</li>
          <li>Sólo en RecFlix</li>
        </Col>
      </Row>
      <Row className="btn-dropdown mx-3">
        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="bg-dark border-secondary text-light" id="dropdown-autoclose-true">
              <TbWorld /> Español
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className='mx-3 mt-3'>
        <Col md="auto">
          <p>Netflix Argentina</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer