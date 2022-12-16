import React, {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Message from './Message';
import Loading from './Loading';
import Toast from './Toats';
import { toast} from "react-toastify";


const ProfilTabs = () => {
    const [ username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const toastId = React.useRef(null)

   const Toastobjects = {
    pauseOnFocusLoss : false,
    draggable: false,
    pauseOnHover: false,
    autoClose:2000
   }

    const dispatch = useDispatch();

const  userDetails= useSelector(state =>state.userDetails);
const {error,loading, user} = userDetails;

const updateUserProfile = useSelector(state =>state.updateUserProfile);
 //const {loading: updateLoading} = updateUserProfile;


useEffect(() =>{
    if(user) {
     setUsername(user.username);
     setEmail(user.email);
    }
}, [dispatch,user]);

const  submitHandler = (e) =>{
    e.preventDefault();

    //password match
if(password !==confirmPassword){
if(!toast.isActive(toastId.current)){
toastId.current = toast.error("Passwords do not match",Toastobjects)
}
}else{
   dispatch(updateUserProfile({ id: user._id,username,email,password}))  
   if(!toast.isActive(toastId.current)){
     toastId.current = toast.success("Profile update",Toastobjects)
}
}
};
  return (
    <>
    <Toast/>
    {error && <Message variante="alert-danger">{error}</Message>}
    {loading && <Loading/>}
    {/* {updateLoading && <Loading/>} */}
    <form className='row form-container' onSubmit={submitHandler}>
        <div className='col-md-6 w-2 mt-3'>
            <div className='form'>
                <label for="account-fn" >Username</label>
                <input className='form-control' type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
        </div>
        <div className='col-md-6 w-2 mt-3'>
            <div className='form'>
            <label for="account-email" >E-mail Address</label>
                <input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='col-md-6 w-2 mt-3 '>
            <div className='form'>
            <label for="account-pass" >New Password</label>
                <input className='form-control' type="password"value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <div className='col-md-6 w-2 mt-3'>
            <div className='form'>
            <label for="account-confirm-pass" >Confirm Password</label>
                <input className='form-control' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword (e.target.value)}/>
            </div>
        </div>
        <button type='submit' className='bnt w-2 mt-3'>Update Profile</button>
    </form>
    </>
  );
};

export default ProfilTabs