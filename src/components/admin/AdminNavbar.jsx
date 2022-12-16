import React from 'react'
import { Container, Row,  } from 'react-bootstrap'
import {Settings, Search, Notifications} from "@mui/icons-material"
import "./Admin-nav.css"
import { NavLink } from 'react-router-dom'


const admin_nav =[
  {
    display:'Dashboard',
    path:'/dashboard'
  },
  {
    display:'All-Products',
    path:'/dashboard/all-products'
  },
  {
    display:'Orders',
    path:'/dashboard/orders'
  },
  {
    display:'Users',
    path:'/dashboard/users'
  },
]

const AdminNavbar = () => {
  return (
    <>
  <header className='admin_header'>
    <div className='admin_nav-top'>
      <Container>
        <div className='admin_nav-wrapper-top'>
          <div className='logo'>
            <h2>Myashop</h2>
          </div>
          <div className='search_box'>
            <input type="texte" placeholder='search...'/>
            <span><i><Search/></i></span>
          </div>
          <div className="admin__nav-top-right">
            <span><i><Notifications/></i></span>
            <span><i>
              <Settings/></i>
            </span>
            <img src='/assets/hidjab.png' alt=''/>
          </div>
        </div>
      </Container>
    </div>
  </header>

  <section className='admin_menu p-0'>
    <Container>
      <Row>
        <div className="admin_navigation">
          <ul className="admin_menu-list">
           {admin_nav.map((item, index) => (
            <li className="admin_menu-item" key={index}>
            <NavLink
             to={item.path} 
             className={navClass => 
              navClass.isActive ? 'active_admin-menu' : ""
              }
              >
                {item.display}
              </NavLink>
            </li>
           ))}
          </ul>
        </div>
      </Row>
    </Container>
  </section>
  </>
  )
}

export default AdminNavbar




// import React from 'react'
// import { Link, NavLink} from "react-router-dom"
// // import { NotificationsNone, LanguageOutlined, SettingsOutlined} from "@mui/icons-material"
// // import Sidebar from '../buttons/Sidebar'
// // import Pagehome from './Pagehome'

// const Admin = () => {
//   return (
//     <div>
//     <aside className='navbar-aside' id="offcavas_asid">
//             <div className='aside-top'>
//                 <Link to="/" className='brand-Wrap'> <img src="assets/logo.png" style={{height:"46"}} className="logo" alt='Ecommerce dashboard template'/>
//                 </Link>
//                 <div>
//                     <button className='btn btn-icon btn-aside-minimize'>
//                         <i className='text-muted fas fa-stream'></i>
//                     </button>
//                 </div>
//             </div>
//             <nav>
//                 <ul className='menu-aside'>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/">
//                             <i className='icon fas fa-home'></i>
//                             <span className='text'>Dashboard</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/products">
//                         <i className='icon fas fa-shopping-bag'></i>
//                         <span className='text'>Products</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/addproducts">
//                         <i className='icon fas fa-cart-plus'></i>
//                         <span className='text'>Add products</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/category">
//                         <i className='icon fas fa-list'></i>
//                         <span className='text'>Categories</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/orders">
//                         <i className='icon fas fa-bags-shopping'></i>
//                         <span className='text'>Orders</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link"to="/users">
//                         <i className='icon fas fa-user'></i>
//                         <span className='text'>Users</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link disabled"to="/sellers">
//                         <i className='icon fas fa-store-alt'></i>
//                         <span className='text'>Sellers</span>  
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink activeClassName="active"className="menu-link disabled"to="/transaction">
//                         <i className='icon fas fa-usd-circle'></i>
//                         <span className='text'>transaction</span>  
//                         </NavLink>
//                     </li>
//                 </ul>
//                 <br/>
//                 <br/>
//             </nav>
//             </aside> 
//         </div>
   
//    )
// }
// export default Admin

    // <div className='topbar'>
    //   <div className='topbarWrapper'>
    //   <div className="topLeft">
    //         <img src="assets/logo.png" className="d-block w-20" alt="logo" height="60px"/>
    //       </div>
    //       <div className='topRight'>
    //       <div className='topbarIconContainer'>
    //         <NotificationsNone/>
    //         <span className='topIconBadge'>2</span>
    //       </div>
    //       <div className='topbarIconContainer'>
    //         <LanguageOutlined/>
    //         <span className='topIconBadge'>2</span>
    //       </div>
    //       <div className='topbarIconContainer'>
    //         <SettingsOutlined/>
    //       </div>
    //       <img src='assets/hidjab.png' alt='image2'  className='topAvatar'/>
    //       </div>
    //       </div>
    //       <div className='container-sidebar'>
    //         <Sidebar/>
    //         <Pagehome/>
    //       </div>
    // </div>
  


   
      
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
//     data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
    
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button"
//           data-bs-toggle="dropdown" aria-expanded="false">
//             Admin
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item" href="/">Produits</a></li>
//             <li><a className="dropdown-item" href="/">Commande</a></li>
//             <li><a className="dropdown-item" href="/">Categories</a></li>
//           </ul>
//         </li>
      
//     </div>
  
// </nav>

      // <div className="row">
      //     <div className="col-12 text-center py-4 my-4">
      //       <h1>Admin</h1>
      //       <hr/>
      //     </div>
      //   </div>
      // <div className="row"  height="200px">
        
      //   <div className="col-sm-4">
      //     <div className="card my-5 py-4">
      //       <div className="card-body">
      //         <a href="/" className="btn btn-outline-secondary">Clients</a>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="col-4  ">
      //     <div className="card my-5 py-4">
      //       <div className="card-body">


      //         <a href="/" className="btn btn-outline-secondary">Users</a>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      
 
      /* /* <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Admin</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/message.png" alt="Contact us"
              height="200px" width="200px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" 
                class="form-label">Full Name</label>
                <input type="email" class="form-control"id="exampleForm" 
                placeholder="ndeye amie"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" 
                class="form-label">Email address</label>
                <input type="email" class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"/>
              </div>
                
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" 
                class="form-label">Example textarea</label>
                <textarea class="form-control" 
                id="exampleFormControlTextarea1"
                 rows="3"></textarea>
              </div>
              <button type="submit" class="btn
               btn-outline-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </div> **/
     
    