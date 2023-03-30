import { Facebook, Instagram, MailOutline, Phone, Room, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components"
import Newsletter from "./Newsletter";

const Container = styled.div`
display: flex;
background-color: black;
color: white;
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
 `;

const Logo = styled.h1`
width: 20%;

`;
const Desc = styled.p`
padding: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 10%;
`

const Footer = () => {
  return (
    <>
    <Newsletter/>
    <Container className="dark">
      <Left>
    <Logo><img src="assets/logo.png" alt="logo"/></Logo>
    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt facilis iure ipsum sit blanditiis necessitatibus impedit sunt expedita sed provident nulla,
         officia temporibus explicabo nostrum voluptatum vitae delectus. Magni, officia!
         </Desc>
         <SocialContainer>
            <SocialIcon color = "385999">
            <Facebook/>
            </SocialIcon>
            <SocialIcon color = "E4405F">
            <Instagram/>
            </SocialIcon>
            <SocialIcon color = "55ACEE">
            <Twitter/>
            </SocialIcon>
            <SocialIcon color = "E60023">
            <Pinterest/>
            </SocialIcon>
         </SocialContainer>
      </Left>
      <Center>
        <Title>Lien</Title>
        <List>
            <ListItem>Femme</ListItem>
            <ListItem>Hidjab</ListItem>
            <ListItem>Chaussures</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessoires hidjab</ListItem>
            <ListItem>My Sac</ListItem>
            <ListItem>Abaya</ListItem>
            <ListItem>Ensemblet</ListItem>
            <ListItem>Dilbab</ListItem>
            <ListItem>Colle</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/>Cicap
            </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>782864990
            </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>Myashop@gmail.com
            </ContactItem>
            <Payment img src="/assets/paypal.png"/>
      </Right>
    </Container>
    </>
  )
}

export default Footer







// import React from 'react'
// import { BsFacebook } from 'react-icons/bs'
// import { GrInstagram } from 'react-icons/gr'
// import { BsTwitter } from 'react-icons/bs'
// import { BsGoogle} from 'react-icons/bs'
// //import { NavLink } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//        <footer className='bg-light bg-gradient pt-5 pb-4'>
//       <div className="container ">
//         <div className="col-md-5 offset-md-5 mb-5 py-6 my-6 justify-content-center">
//           <form>
//             <h2>Subscribe to our newsletter</h2>
//             <p>Monthly digest of what's new and exciting from us.</p>
//             <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//               <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
//               <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
//               <button className="btn btn-outline-secondady" type="button">Subscribe</button>
//             </div>
//           </form>
//         </div>
//         <footer className="py-3 my-4">
//           <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Acceuille</a></li>
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Produits</a></li>
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">A propos</a></li>
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Contact</a></li>
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
//           </ul>
//           <p className="text-center text-muted">© 2022 Company, Inc</p>

//           <div className="social">
// 	<a href='/' className="social-link facebook anim ">
// 		<span className="fa fa-facebook anim-out"></span>
// 		<span className="text anim-in ">Facebook</span>
// 	</a>

// 	<a href='/' className="social-link linkedin anim">
// 		<span className="fa fa-linkedin anim-out"></span>
// 		<span className="text anim-in">LinkedIn</span>
// 	</a>
// 	<a href='/' className="social-link google-plus anim">
// 		<span className="fa fa-google-plus anim-out"></span>
// 		<span className="text anim-in">Google+</span>
// 	</a>
// 	<a href='/' className="social-link codepen anim">
// 		<span className="fa fa-codepen anim-out"></span>
// 		<span className="text anim-in">Codepen</span>
// 	</a>
// 		<a href='/' className="social-link github anim">
// 		<span className="fa fa-github anim-out"></span>
// 		<span className="text anim-in">Github</span>
// 	</a>
// 	<a href='/' className="social-link instagram anim">
// 		<span className="fa fa-instagram anim-out"></span>
// 		<span className="text anim-in">Instagram</span>
// 	</a>
// </div>

//           <ul className="list-unstyled d-flex  justify-content-between offset-md-6 mb-6 py-4 my-4">
//             <li><BsFacebook  height="40%" /></li>
//             <li><GrInstagram  /></li>
//             <li><BsTwitter  /></li>
//             <li><BsGoogle  /></li>
//           </ul>
//         </footer>
//       </div>
//       </footer>
//     </div>
//   )
// }
// export default Footer;




/* <div className="container-f">
<footer className="py-5">
<div className="row">
  <div className="col-6 col-md-2 mb-3 ">
    <h5>MYASHOP</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><NavLink className="nav-link" to= "/">Acceuille</NavLink></li>
      <li className="nav-item mb-2"><NavLink className="nav-link" to= "products">Produits</NavLink></li>
      <li className="nav-item mb-2"><NavLink className="nav-link" to= "about">A propos</NavLink></li>
      <li className="nav-item mb-2"><NavLink className="nav-link" to= "contact">Contact</NavLink></li>
    </ul>
  </div>

  <div class="col-md-5 offset-md-1 mb-3 py-4 my-4">
    <form>
      <h2>Subscribe to our newsletter</h2>
      <p>Monthly digest of what's new and exciting from us.</p>
      <div class="d-flex flex-column flex-sm-row w-100 gap-2">
        <label htmlFor="newsletter1" class="visually-hidden">Email address</label>
        <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
        <button class="btn btn-outline-secondady" type="button">Subscribe</button>
      </div>
    </form>
  </div>
</div>

<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-to">
  <p>© 2022 Company, Inc. All rights reserved.</p>
  <ul className="list-unstyled ">
  <li><FaFacebookF color = "385999" height= "40%"/></li>
  <li><FaInstagram color = "E4405F"/></li>
  <li><FaTwitter color = "385999"/></li>
  <li><FaGooglePlusG color = "385999"/></li>
  </ul> 
  * <ul class="list-unstyled d-flex">
    <li class="ms-3"><a class="link-dark" href="/" class="bi" width="24" height="24" xlink:href="#twitter"></a></li>
    <li class="ms-3"><a class="link-dark" href="/"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
    <li class="ms-3"><a class="link-dark" href="/"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
  </ul> 
 </div>
</footer>
</div> 


// <div className='container-footer'>
//  <h1>MYASHOP</h1>
//    <div className='left'>
//     <div className='face'>
//    <FaFacebookF color = "385999"/>
//    </div>
//    <div className='inst'>
//    <FaInstagram color = "E4405F"/>
//    </div>
//    <div className='twitter'>
//    <FaTwitter color = "385999"/>
//    </div>
//    <div className='google'>
//    <FaGooglePlusG color = "385999"/>
//    </div>
//    <div className=''>
    
//    </div>
//     </div>   
// </div>*/

