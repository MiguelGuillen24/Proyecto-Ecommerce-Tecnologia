import './login_form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login_form_comp() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ejemplo: Correodejuan@gmail.com" />
        <Form.Text className="text-muted">
          Ingrese su correo electrónico.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ejemplo: Contraseñadecorreo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerda mi cuenta" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login_form_comp;