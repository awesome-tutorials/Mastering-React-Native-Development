import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as loginActions from './actions'
import Login from './Login'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggingIn && !this.props.loggingIn) {
      this.props.navigation.navigate('Welcome', { facebookUser: this.props.facebookUser })
    }
  }

  render () {
    return (
      <Login
        {...this.props}
        loginWithFacebook={this.props.loginActions.loginWithFacebook}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.Login
}

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

export { ConnectedLogin as Login }
