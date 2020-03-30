import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'
import {
  login,
  addToForm,
} from '../redux/actions/authActions'

class LoginComponent extends Component {

  render() {
    const errorUi = (
      <Row>
        <Col>
          <p className="text-danger">Login failed.</p>
        </Col>
      </Row>
    );

    return (
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        value={this.props.formData.username || ''}
                        onChange={(input) => this.props.addToForm({ username: input })}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.props.formData.password || ''}
                        onChange={(input) => this.props.addToForm({ password: input })}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <Button onClick={this.props.login(this.props.formData)}>Login</Button>
                    </Col>
                  </Row>
                  {this.props.error ? errorUi : <></>}
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { ...auth };
};

const mapDispatchToProps = {
  login,
  addToForm,
}

LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default LoginComponent;