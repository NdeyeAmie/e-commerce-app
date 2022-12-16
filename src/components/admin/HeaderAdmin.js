import React from 'react'

const HeaderAdmin = () => {
  return (
    <div>
      HeaderAdmin
    </div>
  )
}

export default HeaderAdmin








// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import $ from "jquery";
// import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/actions/userAction';

// const HeaderAdmin = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         $("[data-trigger]").on("click", function (e) {
//             e.preventDefault();
//             e.stopPropagation();
//             var offcanvas_id = $(this).attr("data-trigger");
//             $(offcanvas_id).toggleClass("show");
//         });

//         $(".btn-aside-minimize").on("click", function () {
//             if (window.innerWidth < 768) {
//                 $("body").removeClasse("aside-mini");
//                 $(".navbar-aside").toggleClass("show")
//             } else {
//                 //
//                 $("body").toggleClass("aside-mini");
//             }
//         });
//     }, []);
//     const logoutHandler = () => {
//         dispatch(logout())
//     }
//     return (
//         <header className='main-header navbar'>
//             <div className='col-search'>
//                 <form className='searchform'>
//                     <div className='input-group'>
//                         <input list="search_terms"
//                             type="text" className='form-control'
//                             placeholder='searcg term' />
//                         <button className='btn bnt-light bg' type="button">
//                             <i className='far fa-search'></i>
//                         </button>
//                     </div>
//                     <datalist id='search_terms'>
//                         <option value="products" />
//                         <option value="New orders" />
//                         <option value="Apple iphone" />
//                         <option value="ndeye amie" />
//                     </datalist>
//                 </form>
//             </div>
//             <div className='col-nav'>
//                 {/* <button className='btn btn-icon btn-mobile me-auto'
//                     data-trigger="#offcanvas_aside">
//                     <i className='md-28 fas fa-bars'></i>
//                 </button> */}
//                 <ul className='nav'>
//                     <li className='nav-item'>
//                         <Link className={'nav-link btn-icon'} title="Dark mode" to="#">
//                             <i className='fas fa-moon'></i>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link className='nav-link btn-icon' to="#">
//                             <i className='fas fa-bell'></i>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link className='nav-link' to="#">
//                             English
//                         </Link>
//                     </li>
//                     <li className='dropdown nav-item'>
//                         <Link className='dropdown-toggle' data-bs-toggle="dropdown" to="#">
//                             {/* <img className='img-xs rounded-circle' src='assets/hidjab.png'
//                                 alt='user' /> */}
//                         </Link>
//                         <div className='dropdown-menu dropdown-menu-end'>
//                             <Link className='dropdown-item' to="/">
//                                 My profil
//                             </Link>
//                             <Link className='dropdown-item' to="#">
//                                 Setting
//                             </Link>
//                             <Link onClick={logoutHandler} 
//                             className='dropdown-item text-danger' to="#">
//                                 Exit
//                             </Link>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </header>

//     );
// };

// export default HeaderAdmin
