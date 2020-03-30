import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import {
  logout,
} from '../redux/actions/authActions'

class LogoutButtonComponent extends Component {

  render() {
    return (
      <Button onClick={this.props.logout()}>Logout</Button>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { ...auth };
};

const mapDispatchToProps = {
  logout
}

LogoutButtonComponent = connect(mapStateToProps, mapDispatchToProps)(LogoutButtonComponent);
export default LogoutButtonComponent;