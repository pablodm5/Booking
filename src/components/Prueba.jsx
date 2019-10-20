"use strict";

import React from "react";
import FacebookLogin from "react-facebook-login";

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="1406029036212285"
        autoLoad={true}
        fields="name,email,picture"
        textButton="Inicio con Facebook"
        callback={this.responseFacebook}
      />
    );
  }
}

export default MyComponent;
