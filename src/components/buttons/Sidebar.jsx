// import './sidebar.css'
// import { Link, NavLink} from "react-router-dom"
// import LineStyleIcon from '@mui/icons-material/LineStyle';
// import Timeline from '@mui/icons-material/Timeline';
// import TrendingUp from '@mui/icons-material/TrendingUp';
// import { WorkOutline, Report, PermIdentity, Storefront, Message, EmailOutlined, DynamicFeed, Assessment, PaidOutlined } from '@mui/icons-material';

// const  Sidebar =() =>{
//     return ( 
//         <div>
//            <aside className='navbar-aside' id="offcavas_asid">
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
//      )
// }
   
// export default Sidebar
// <div className='sidebar'>
        //     <div className="sidebarWrapper">
        //         <div className='sidebarMenu'>
        //             <h3 className='sidebarTitle'>Dashboard</h3>
        //             <ul className='sidebarList'>
        //                 <li className='sidebarListItem active'>
        //                     <LineStyleIcon className='sidebarIcon' />
        //                     Home
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Timeline className='sidebarIcon' />
        //                     Analytics
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <TrendingUp className='sidebarIcon' />
        //                     Sales
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className='sidebarMenu'>
        //             <h3 className='sidebarTitle'>Menue rapide</h3>
        //             <ul className='sidebarList'>
        //                 <li className='sidebarListItem '>
        //                     <PermIdentity className='sidebarIcon' />
        //                     Users
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Storefront className='sidebarIcon' />
        //                     Products
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <PaidOutlined className='sidebarIcon' />
        //                     Transactions
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Assessment className='sidebarIcon' />
        //                     Reports
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className='sidebarMenu'>
        //             <h3 className='sidebarTitle'>Notification</h3>
        //             <ul className='sidebarList'>
        //                 <li className='sidebarListItem '>
        //                     <EmailOutlined className='sidebarIcon' />
        //                     Mail
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <DynamicFeed className='sidebarIcon' />
        //                     FeedBack
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Message className='sidebarIcon' />
        //                     Message
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className='sidebarMenu'>
        //             <h3 className='sidebarTitle'>Staff</h3>
        //             <ul className='sidebarList'>
        //                 <li className='sidebarListItem '>
        //                     <WorkOutline className='sidebarIcon' />
        //                     Menage
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Timeline className='sidebarIcon' />
        //                     Analytics
        //                 </li>
        //                 <li className='sidebarListItem'>
        //                     <Report className='sidebarIcon' />
        //                     Reports
        //                 </li>
        //             </ul>
        //         </div>

        //     </div>
        // </div>
  