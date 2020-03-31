import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  login,
  logout,
  addToForm,
  toggleModal,
  setModalMessage,
  verifyLogin
} from '../redux/actions/authActions'


const LoginComponent = (props) => {

  console.log("LOGINCOMPONENT", props)

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
                      value={props.auth.formData.username}
                      onChange={(e) => {
                        props.addToForm({ username: e.target.value })
                      }}
                    ></Form.Control>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => props.addToForm({ password: e.target.value })}
                    ></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button onClick={() => props.login(props.auth.formData)}>Login</Button>
                  </Col>
                </Row>
                {props.auth.error ? errorUi : <></>}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ( {
  setModalMessage: bindActionCreators(setModalMessage, dispatch),
  toggleModal: bindActionCreators(toggleModal, dispatch),
  login: bindActionCreators(login, dispatch),
  logout: bindActionCreators(logout, dispatch),
  addToForm: bindActionCreators(addToForm, dispatch),
})

export default connect(state => state, mapDispatchToProps)(LoginComponent)