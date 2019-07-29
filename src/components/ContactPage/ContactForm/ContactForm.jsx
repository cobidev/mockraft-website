import React from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

class ContactForm extends React.Component {
  state = {
    email: {
      nombre: '',
      emisor: '',
      asunto: '',
      texto: ''
    },
    alert: {
      show: false,
      type: '',
      message: ''
    },
    validated: false
  };

  // actualizar informacion del estado email a traves de los inputs
  handleInput = e => {
    this.setState({
      email: { ...this.state.email, [e.target.name]: e.target.value }
    });
  };

  // limpiar state de email
  clearEmailState = () => {
    this.setState({ email: { nombre: '', emisor: '', asunto: '', texto: '' } });
  };

  // cerrar Alert cuando se muestre
  handleCloseAlert = () => {
    this.setState({ alert: { ...this.state.alert, show: false } });
    this.props.history.push('/');
  };

  // enviar datos del formulario a SendGrid para proceder con el envio del email
  handleFormSubmit = async e => {
    e.preventDefault();

    // trigger form validation
    this.setState({ validated: true });

    // hacer peticion POST para enviar correos
    try {
      const { email } = this.state;

      // configuracion del request
      const settings = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          nombre: email.nombre,
          emisor: email.emisor,
          asunto: email.asunto,
          texto: email.texto
        })
      };
      // Hacer POST al endpoint de SendGrid
      const result = await fetch(`https://sendgrid-express.herokuapp.com/send-email`, settings);

      // verificar que el correo se haya enviado
      if (result.ok) {
        // clear email state, input values and validations
        this.setState({ validated: false });
        this.clearEmailState();
        document.querySelector('.contact-form').reset();

        // setear un Alert satisfactorio
        this.setState({
          alert: {
            show: true,
            type: 'success',
            message: '¡Solicitud enviada! Pronto te contáctaremos.'
          }
        });
      }
    } catch (err) {
      console.log(err.message);

      // clear email state, input values and validations
      this.setState({ validated: false });
      this.clearEmailState();
      document.querySelector('.contact-form').reset();

      // setear el Alert en error
      this.setState({
        alert: {
          show: true,
          type: 'danger',
          message:
            'Oops, algo anda mal. Estamos trabajando en resolverlo pronto. Intente mas tarde.'
        }
      });
    }
  };

  render() {
    const { alert, validated } = this.state;

    return (
      <Card className="contact-card shadow-lg">
        <Card.Body className="p-5">
          <Alert
            className="font-small mb-5 d-flex justify-content-between align-items-center"
            show={alert.show}
            variant={alert.type || ''}>
            {alert.message || ''}
            <span
              style={{ cursor: 'pointer' }}
              className="font-small"
              onClick={this.handleCloseAlert}>
              X
            </span>
          </Alert>

          <Form
            noValidate
            validated={validated}
            className="contact-form text-main"
            onSubmit={this.handleFormSubmit}>
            <Form.Group controlId="formBasicNombre">
              <Form.Label className="font-medium ">Nombre completo</Form.Label>
              <Form.Control
                required
                className="font-small"
                name="nombre"
                size="lg"
                type="text"
                placeholder="Ingrese su Nombre"
                onChange={this.handleInput}
              />
              <Form.Control.Feedback className="font-small" type="invalid">
                Por favor ingrese su Nombre
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-medium mt-4">Email</Form.Label>
              <Form.Control
                required
                className="font-small"
                name="emisor"
                size="lg"
                type="email"
                placeholder="Ingrese su Email"
                onChange={this.handleInput}
              />
              <Form.Control.Feedback className="font-small" type="invalid">
                Por favor ingrese su Email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label className="font-medium mt-4">Asunto</Form.Label>
              <Form.Control
                required
                className="font-small"
                name="asunto"
                size="lg"
                placeholder="Ingrese Asunto"
                onChange={this.handleInput}
              />
              <Form.Control.Feedback className="font-small" type="invalid">
                Por favor ingrese un asunto
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="font-medium mt-4">Mensaje</Form.Label>
              <Form.Control
                required
                className="font-small "
                name="texto"
                size="lg"
                as="textarea"
                rows="5"
                placeholder="Estoy interesado en..."
                onChange={this.handleInput}
              />
              <Form.Control.Feedback className="font-small" type="invalid">
                El mensaje es requerido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="d-flex">
              <Button
                block
                size="lg"
                className="d-block font-medium btn-theme--main"
                type="submit">
                Enviar correo
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default ContactForm;
