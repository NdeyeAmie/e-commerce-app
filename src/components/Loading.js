import React from 'react'
import { Spinner } from 'react-bootstrap';


const Loading = () => {
  return (
   
      <Spinner animation="border" role="status"
      style={{
        width: "100px",
        height:"100px",
        margin:"auto",
        displaye:"block",
      }}
      >
      <span className="sr-only">Loading...</span>
    </Spinner>
            
    );
  };  
    /* style={{  
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%"
    }}
   
    <Spinner
    style={{
        width: 'size',
        height: 'size',
    }}
    animation="border"
    />*/

    

export default Loading