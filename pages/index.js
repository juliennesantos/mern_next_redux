import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {
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

// class Page extends Component {

//   componentDidMount(){
//   }

//   loginSuccessHandler() {
//     this.props.setModalMessage('Login success!');
//     this.props.toggleModal(true);
//   }

//   logoutFailureHandler() {
//     this.props.setModalMessage('Logout failed.');
//     this.props.toggleModal(true);
//   }

//   loggedInView = () => (
//     <Container className="mt-5">
//       <Row className="mb-3">
//         <Col className="text-center">
//           Welcome, {this.props.username}!
//         </Col>
//       </Row>
//       <Row>
//         <Col className="text-center">
//           <LogoutButtonComponent
//             onLogout={() => this.logoutSuccessHandler()}
//             onLogoutFail={() => this.logoutFailureHandler()}
//           ></LogoutButtonComponent>
//         </Col>
//       </Row>
//     </Container>
//   );

//   closeModal() {
//     this.props.toggleModal(false);
//   }

//   render() {
//     console.log(this.props);
//     return <></>
//     return (
//       <>
//         {this.props.loggedIn ? this.loggedInView() : <LoginComponent onLogin={this.loginSuccessHandler()} />}
//         <Modal show={this.props.showModal}>
//           <Modal.Body>
//             {this.props.modalMessage}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => this.closeModal()}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }

const Page = props => {
  console.log("PROPS",props)

  return <></>
}

Page.getInitialProps = async ({ store, req }) => {
  store.dispatch(verifyLogin(req.cookies))
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Page)