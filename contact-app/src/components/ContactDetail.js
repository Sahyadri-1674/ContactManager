import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.jpg'
const ContactDetail = (props) => {
//   console.log(props)
 const {name,email} = props.detailContact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center aligned">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
