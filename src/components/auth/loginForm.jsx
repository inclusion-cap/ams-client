import React, {Component} from 'react';
import '../../styles/login/login.css';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);

  }
  componentDidUpdate(e) {

    // if (this.props.location.pathname !== e.location.pathname) {

    //   this
    //     .props
    //     .clearErrors();
    // }
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props)
    const user = Object.assign({}, this.state);

    this.props.login(user)
    .then(() => this.props.history.push('/campaigns'));
      
  }

  onChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    return (
        <div> 
            <form onSubmit={this.handleSubmit} className="form-container"> 

                <p className="form-label">Username</p> 
                <li className="form-components">
                
                <input
                id="45"
                type="text"
                onChange={this.onChange("username")}
                className="form-input"/>

                </li> 
                <p className="form-label"> Password </p>
                <li className="form-components">
                    <input 
                    id="3"
                    type="password" 
                    onChange={this.onChange("password")} 
                    className="form-input"/> 
                    <li onClick={this.handleSubmit} className="button-log-submit"> 
                        <input type="submit" value="sign in"/> 
                    </li>
                </li>
            </form>
        </div>
    )
  }
}