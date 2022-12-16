//  import * as React from 'react';
//  import Rating from '@mui/material/Rating';
//  import Stack from '@mui/material/Stack';

//  export default function HalfRating() {
//    return (
//      <Stack spacing={1}>
//        <Rating name="half-rating" defaultValue={4 }   />
//      </Stack>
     
//    );
//  }


 import React from 'react'
 const Rating = ({value, text}) => {
   return (
     <div className='rating'>
         <span style={{ color: "yellow" }}>
         <i className={
             value >=1
             ? 'fas fa-star'
           : value >= 0.5
           ?"fas fa-star-halt-alt"
           :"fas fa-start"
     }
     ></i>
     </span>
     <i className={
         value >= 2
         ? "fas fa-star"
         :value >= 1.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     ></i>
     <span style={{ color: "yellow" }}>
     <i className={
         value >= 3
         ? "fas fa-star"
         :value >= 2.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     ></i>
     </span>
     <span style={{ color: "yellow" }}>
     <i className={
         value >= 4
         ? "fas fa-star"
         :value >= 3.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     ></i>
     </span>
     <span style={{ color: "yellow" }}>
     <i className={
         value >= 5
         ? "fas fa-star"
         :value >= 4.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     ></i>
     </span>
     <span>{text && text}</span>
     </div>
   );
 }

 export default Rating