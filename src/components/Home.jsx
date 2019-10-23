import React from "react";
import Header from "./Layout/Header";

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    console.log("asdsd");
    return (
      <>
        <Header />
        <h1>HOLA</h1>
      </>
    );
  }
}

export default MyComponent;
