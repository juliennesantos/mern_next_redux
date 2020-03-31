import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {
  login,
  logout,
  addToForm,
  toggleModal,
  setModalMessage,
  verifyLogin
} from '../redux/actions/authActions'
import LoginComponent from '../components/LoginComponent';
import LogoutButtonComponent from '../components/LogoutButtonComponent';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

class Page extends Component {

  componentDidMount() {
    // this.props.verifyLogin()
  }

  logoutFailureHandler() {
    this.props.setModalMessage('Logout failed.');
    this.props.toggleModal(true);
  }

  loggedInView = () => (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col className="text-center">
          Welcome, {this.props.username}!
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <LogoutButtonComponent />
        </Col>
      </Row>
    </Container>
  );

  closeModal() {
    this.props.toggleModal(false);
  }

  render() {
    console.log("INDEX DATA", this.props);

    return (
      <>
        {this.props.loggedIn ? this.loggedInView() : <LoginComponent />}
        <Modal show={this.props.showModal}>
          <Modal.Body>
            {this.props.modalMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

Page.getInitialProps = async ({ store, req }) => {
  store.dispatch(verifyLogin(req.cookies))
  return {}
}

const mapStateToProps = ({ auth }) => {
  return auth
}

const mapDispatchToProps = {
  setModalMessage,
  toggleModal,
  login,
  logout,
  addToForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)