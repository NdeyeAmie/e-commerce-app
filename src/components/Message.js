import React from 'react'
// import { Alert } from "react-bootstrap"

const Message = ({ variant , children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;

};
Message.defaultProps ={
  variant:"alert-nfo"
}

export default Message;