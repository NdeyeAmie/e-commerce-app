import React, {  useEffect } from 'react';
// import Loading from '../components/Loading'
// import Message from '../components/Message'
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from '../redux/actions/userAction';
import moment from "moment";
import ProfilTabs from './ProfilTabs';


const UserProfil = () => {
    window.scrollTo(0,0);

    const dispatch = useDispatch();
    const userLogin = useSelector(state =>state.userLogin);
const { userInfo} = userLogin;

useEffect(() =>{
    dispatch(getUserDetails("profile"));
}, [dispatch]);
    return(
        
        <>
        <ProfilTabs/>
        <div className='container mt-lg-5 mt-3'>
            <div className='row align-item-start'>
                <div className='col-lg-4 p-0 shadow'>
                <div className='author-card pb-md-3'>
                    <div className='author-card-cover'></div>
                    <div className='author-card-profile row'>
                    <div className='author-card-avatar col-md-5'>
                    {/* <img src="assets/hidjab2.png" alt="image2" className="widgetSmImg" /> */}
                        <img src="assets/logo.png" style={{height:"46"}} alt="hi"/>
                    </div>
                    <div className='author-card-details col-md-7'>
                        <h5 className='author-card-name mb-2'>
                            <strong>{userInfo.username}</strong>
                        </h5>
                        <span className='author-card-position'>
                            <>Joined {moment(userInfo.createdAt).format("LL")}</>
                        </span>
                        </div>
                    </div>
                    </div>
                    {/* <div className='wizard pt-3'>
                        <div className='d-flex align-items-start'>
                            <div clas="nav align-items-start flex-column col-12 nav-pills me-3" 
                            id="v-pills-tab"
                             role="tablist" 
                            aria-orientation="vertical">
                           <button className='nav-link active'
                           id='pills-home-tab'
                           data-bs-toggle="#v-pills-home"
                           type='button'
                           role='tab' aria-selected='true'>
                            Profile Settings
                           </button>
                           <button class='nav-link d-flex justify-content-between'
                           id='v-pills-profile-tab'
                           data-bs-toggle="pills"
                           data-bs-target="#v-pills-profile"
                           type='button'
                           role='tab' aria-selected='false'
                           >
                            Orders list
                            <span className='badge2'>3</span>
                           </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div class='tab-content col-lg-8 pb-5 pt-lg-0 pt-3'
                id='v-pills-tabContent'
                >

                </div>
            </div>
        </div>
       
        </>
    )
}

    export default UserProfil

// import { Link, useNavigate } from 'react-router-dom';
// import { getUserDetails } from '../redux/actions/userAction';
// import {updateUserProfile} from '../redux/actions/userAction'

// const UserProfil = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [message, setMessage] = useState("");
//     // const [error, setError] = useState(false)
//     // const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const userDetails = useSelector((state) => state.userDetails);
//     const userLogin = useSelector((state) => state.userLoginS);
//     const { error, loading, user } = userDetails;
//     const userInfo = userLogin;
    
//    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
//    const {success} = userUpdateProfile

//     useEffect(() => {
//         if (!userInfo) { 
//             navigate("/profil")
//         } else {
//             if (!user.name) {
//                 dispatch(getUserDetails('profil'))
//             } else {
//                 setUsername(user.username)
//                 setEmail(user.email)
//             }
//         }
//     }, [userInfo, navigate, user, dispatch]);

//     const submitHandler = (e) => {
//         e.preventDefault();
//     //dispatch
//     dispatch(updateUserProfile({id:user._id,username,email,password}))
//     };

//     return (
//         <div>
//             <div className="titre">
//                 <h1>Update Information</h1>
//             </div>
//             {error && <Message variant='danger'>{error}</Message>}
//             {success && <Message variant="sucess">Profile update</Message>}
//             {loading && <Loading />}
//             {message && <Message variant='danger'>{message}</Message>}
//             <form className='profil' onSubmit={submitHandler} >
//                 <div className="mb-3">
//                     <label htmlFor="exampleInput" className="htmlForm-label w-100 ">Username</label>
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="htmlForm-control" id="exampleInput" />

//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="htmlForm-label w-100 ">Email address</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="htmlForm-text">Vos donnés resterons privé.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="htmlForm-label w-100 ">Password</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="htmlForm-control" id="exampleInputPassword1" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="htmlForm-label w-100 ">Confirme Password</label>
//                     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="htmlForm-control" id="exampleInputPassword1" />
//                 </div>
//                 {/* <div className="mb-3 htmlForm-check">
//                                     <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
//                                     <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
//                                 </div> */}
//                 <button type="submit" className="btn
//                 btn-outline-secondary w-2 mt-5">Register</button>
//             </form>
//             <p>
//                 Have an account!</p>
//             <Link to="/login">login</Link>
//         </div>
//     )
// }

