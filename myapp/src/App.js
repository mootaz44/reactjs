import './App.css';
import {Nav, Navbar, Container, NavDropdown, Card} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container className='main_section'>
          <Navbar.Brand href="#home">Docplanner Group</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">About us</Nav.Link>
                <Nav.Link href="https://www.docplanner.com/career" target="_blank">Career</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://www.docplanner.com/department?dep=marketing" target="_blank">Marketing & PR</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.docplanner.com/department?dep=customer" target="_blank">Customer Success & Sales</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.docplanner.com/department?dep=it" target="_blank">IT, Product, Data</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.docplanner.com/department?dep=finance" target="_blank">Finance & Administration</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.docplanner.com/department?dep=hr" target="_blank">HR & more</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className='main_section'>
        <h1>Making the healthcare experience more human</h1>
      </div>
      <div className='flex_2 main_section'>
        <Card style={{ width: '18rem' }}>
          <Card.Body className='patients'>
            <Card.Title>For patients</Card.Title>
            <Card.Subtitle className="mb-2 color">Find a doctor, book a visit and solve any health-related doubt</Card.Subtitle>
              <div className="box_style">
                <select>
                  <option>Choose country</option>
                  <option value="https://academy.doctoraliar.com">Argentina</option>
                  <option value="https://pro.doctoralia.com.br/produtos/sistema-de-agendamento/agenda-doctoralia-para-especialistas">Brazil</option>
                  <option value="https://academy.doctoralia.cl">Chile</option>
                  <option value="https://academy.doctoralia.co">Colombia</option>
                  <option value="https://lekar.znamylekar.cz">Czech</option>
                  <option value="https://pro.jameda.de">Germany</option>
                  <option value="https://pro.miodottore.it/con-chi-collaboriamo/specialisti-e-medici-di-medicina-generale">Italy</option>
                  <option value="https://pro.doctoralia.com.mx/productos/agenda-doctoralia-para-especialistas">Mexico</option>
                  <option value="https://academy.doctoralia.pe">Peru</option>
                  <option value="https://pro.znanylekarz.pl/produkty/oprogramowanie-medyczne/znanylekarz-dla-lekarzy">Poland</option>
                  <option value="https://pro.doctoralia.es/productos/sistema-de-gestion-de-pacientes/doctoralia-pro-para-especialistas">Spain</option>
                  <option value="https://uzman.doktortakvimi.com">Turkey</option>
                </select>
              </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body className='doctors'>
            <Card.Title>For doctors</Card.Title>
            <Card.Subtitle className="mb-2 color">Save time managing visits and cut no-shows by half</Card.Subtitle>
              <div className="box_style">
                <select>
                  <option>2 to 20 specialists</option>
                  <option value="http://pro.doctoralia.com.br/produtos/sistema-de-agendamento/agenda-doctoralia-para-clinicas">Brazil</option>
                  <option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
                  <option value="http://pro.miodottore.it/con-chi-collaboriamo/centri-medici">Italy</option>
                  <option value="http://pro.doctoralia.com.mx/productos/agenda-doctoralia-para-clinicas">Mexico</option>
                  <option value="http://pro.znanylekarz.pl/produkty/oprogramowanie-medyczne/znanylekarz-dla-placowek">Poland</option>
                  <option value="http://pro.doctoralia.es/productos/sistema-de-gestion-de-pacientes/doctoralia-pro-para-clinicas">Spain</option>
                  <option value="http://kurumsal.doktortakvimi.com">Turkey</option>
                </select>
              </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body className='clinics'>
            <Card.Title>For clinics</Card.Title>
            <Card.Subtitle className="mb-2 color">Deliver an exceptional patient experience in your clinic</Card.Subtitle>
            <div className="box_style">
              <select>
                <option>2 to 20 specialists</option>
                <option value="http://pro.doctoralia.com.br/produtos/sistema-de-agendamento/agenda-doctoralia-para-clinicas">Brazil</option>
                <option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
                <option value="http://pro.miodottore.it/con-chi-collaboriamo/centri-medici">Italy</option>
                <option value="http://pro.doctoralia.com.mx/productos/agenda-doctoralia-para-clinicas">Mexico</option>
                <option value="http://pro.znanylekarz.pl/produkty/oprogramowanie-medyczne/znanylekarz-dla-placowek">Poland</option>
                <option value="http://pro.doctoralia.es/productos/sistema-de-gestion-de-pacientes/doctoralia-pro-para-clinicas">Spain</option>
                <option value="http://kurumsal.doktortakvimi.com">Turkey</option>
              </select>
            </div>
            <div className="box_style">
              <select>
                <option>More than 20 specialists</option>
                <option value="http://tuotempo.com.br">Brazil</option>
                <option value="http://tuotempo.it">Italy</option>
                <option value="http://tuotempo.com.mx">Mexico</option>
                <option value="http://pro.znanylekarz.pl/produkty/oprogramowanie-medyczne/znanylekarz-dla-placowek">Poland</option>
                <option value="http://tuotempo.es">Spain</option>
              </select>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
