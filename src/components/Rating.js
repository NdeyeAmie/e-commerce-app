//  import * as React from 'react';
//  import Rating from '@mui/material/Rating';
//  import Stack from '@mui/material/Stack';

//  export default function HalfRating() {
//    return (
//      <Stack spacing={1}>
//        <Rating name="half-rating" defaultrating={4 }   />
//      </Stack>
     
//    );
//  }


//  import React from 'react'
 function Rating(props)  {
  const { rating, numReviews} = props;
   return (
     <div className='rating'>
         <span>
         <i
          className={
             rating >=1
             ? 'fas fa-star'
           : rating >= 0.5
           ?"fas fa-star-halt-alt"
           :"fas fa-start"
     }
     />
     </span>
     <span>
     <i className={
         rating >= 2
         ? "fas fa-star"
         :rating >= 1.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     />
     </span>
     <span>
     <i
      className={
         rating >= 3
         ? "fas fa-star"
         :rating >= 2.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     />
     </span>
     <span>
     <i className={
         rating >= 4
         ? "fas fa-star"
         :rating >= 3.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     />
     </span>
     <span>
     <i
      className={
         rating >= 5
         ? "fas fa-star"
         :rating >= 4.5
         ?"fas fa-star-halt-alt"
         :"fas-fa-start"
     }
     />
     </span>
     <span>{numReviews}</span>
     </div>
   );
 }

 export default Rating