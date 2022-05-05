import React from "react";

class Render extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedin: false };
  }
  render() {
    return this.state.isLoggedin ? <div>Hi Kuntal</div> : <div>Hi Jiny</div>;
  }
}
export default Render;
