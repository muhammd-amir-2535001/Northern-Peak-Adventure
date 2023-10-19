// import React from 'react';
import amir123 from '../assets/amir2.jpg';
import amir from '../assets/amir.jpg';    
// import Gilgit from '../assets/gilgit1.png';  
// import Google-ICON from "./assets/google.svg"
 import logopeak from '../assets/logo_peak-removebg-preview.png'
 import Button from '@mui/material/Button';
 import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import App from '../App';
// import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';




// import Checkbox from '@mui/material/Checkbox';

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9"
};

const Login = () => {

  
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


  return (
    <div>
      
     
      <div className="w-full min-h-screen flex items-start">
      

        <div className="relative w-1/2 h-full flex flex-col">

          <div className='backgroundbaler absolute top-[20%] left-[10%] flex flex-col'>
            <img src={logopeak} className="logoimg logoleft"/>
            <h1 className='text-4xl bg-black text-white p-1 ml-1 font-bold my-4'>Northern Peak Adventure</h1>
            <p className='text-xl text-white font-normal  hover:bg-green-700'>Northern Peak Adventure opens the door to an extraordinary experience. Join us in discovering the hidden treasures of Gilgit-Baltistan. Are you ready for the adventure of a lifetime?</p>
            <h3 className='text-2xl text-white font-bold my-4'>Explore Gilgit's Hidden Wonders Today</h3>
            <p className='text-xl text-white divide-solid font-normal hover:bg-green-700 '>Northern Peak Adventure opens the door to an extraordinary experience. Join us in discovering the hidden treasures of Gilgit-Baltistan. Are you ready for the adventure of a lifetime?</p>
            <h2 className='text-1xl text-white font-bold my-4 hover:bg-green'>Discover Gilgit's Adventure Beyond Limits.</h2>
            {/* <h2 className='text-1xl text-black font-bold my-4'>Unlock Gilgit's Secrets with Us.</h2>*/}
            {/* <h2 className='text-1xl text-black font-bold my-4 hover:bg-green'>Journey with Us, Unveil Paradise.</h2>  */}
            <img src={amir} className='ceo'/>
            <h2 className='text-1xl bg-[#ffab00] font-bold my-4 hover:bg-green'>Muhammad Amir Founder and CEO  Of Northern Peak Adventure </h2>
          </div>
          <div>
          <img src={amir123} className="leftimgbg"/>
          </div>

         
         
        
        </div>

        <div className='w-1/2 h-full bg-[#4dd0e1] flex flex-col p-20 justify-between items-center'>

            <img src={logopeak} className="logoimg"/>

            <h1 className='text-xl text-white p-1 font-bold bg-black border-white/10 '>Northern Peak Adventure</h1>
            


            <div className='w-full flex flex-col max-w-[400px] '>

              <div className='w-full flex flex-col mb-2'>

              <h3 className='text-3xl text-black font-semibold mb-2'>LogIn</h3>
              {/* <img src={Gilgit} className=""/> */}
              <p className='text-base mb-2 text-black'>welcome back ! please enter your details</p>
              </div>
           

              <div className='w-full flex flex-col'>
                <div>
                {/* <input 
                type="email"
                placeholder='Email'
                className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '
                 />
                
                 <input 
                type="password"
                placeholder='Password'
                className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none '
                 /> */}
                 </div>
                              <Stack
                  component="form"
                  sx={{
                   width: '25ch',
                            }}               
                 spacing={2}
                 noValidate
                 autoComplete="off"
               >
                  <TextField
                    className='twoinput'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Email"
                    variant="filled"
                    size="small"
                 />
                 <TextField
                   className='twoinput'
                   hiddenLabel
                   id="filled-hidden-label-normal"
                   defaultValue="Password"
                   variant="filled"
                 />
               </Stack>

              </div>

              <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center'>
                <Checkbox
                   checked={checked}
                   onChange={handleChange}
                   inputProps={{ 'aria-label': 'controlled' }}
                 />          
                  <p>Remeber no for 50 days</p>
                </div>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2'>Forget Password ?</p>

              </div>

            </div> 

            <div className='w-full flex items-n justify-center mt-8'>
              <p className='text-sm font-normal text-black'>Done have a account? <span className='font-semibold underline-offset-2 cursor-pointer'>Singn up for free</span> </p>
            </div>

            <div className='w-full flex flex-col my-4'>
              <button className='w-full text-white my-2 font-semibild bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer  hover:bg-green-700' >
                Login
              </button>
              <button className='w-full text-#060606 my-2 font-semibild bg-[#ffab00]  border border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-green-700' >
                Sign Up
              </button>
            </div>
            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black/40'></div>
               <p className='text-lg absolute mb-5 text-black/80 bg-[#6fcde9]'>or</p>
            </div>
            {/* <div className='w-full text-#060606 my-2 font-semibild bg-[#896023] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer' >
                {/* <img src={Google-ICON} className="h-6 mr-2" /> }
                Sign in with google
              </div> */}
              <Button className=' w-full text-#060606 my-2 font-semibild bg-[#896023] border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer ' variant="contained" disableElevation>
              Sign in with google
               </Button>
              

       </div>





      </div>

    </div>
  );
};

export default Login;
