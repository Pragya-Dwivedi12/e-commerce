// import React, { useState } from 'react';

// export default function SignUp(){
//     const [name,setName] = useState('');
//     const [number,setNumber] = useState(''); 
//     const [password,setPassword] = useState('');
//     const [email,setEmail] = useState('');
//     const [date,setDate] = useState('');
//     const [address,setAddress] = useState('');

//     const hndleSubmit=(e)=>{
//         e.preventDefault();
//         const name = e.target.name.value;
//         const number = e.target.number.value;
//         const password = e.target.password.value;
//         const email = e.target.email.value;
//         const date = e.target.date.value;
//         const address = e.target.address.value;
//         console.log(name,number,password,email,date,address);
//     }
//     return (
//         <div>
//            <h1 className='fill'>SignUp</h1>

//             <form onSubmit={hndleSubmit}>
//                 <div>
//                     <label>Name:-</label>
//                     <input type="text" name="name" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
//                 </div><br /><br />

//                  <div>
//                     <label>Number:-</label>
//                     <input type="number" name="number" placeholder='Enter Your Number' value={number} onChange={(e)=>setNumber(e.target.value)} required/>
//                 </div><br /><br />

//                  <div>
//                     <label>Password:-</label>
//                     <input type="password" name="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
//                 </div><br /><br />

//                  <div>
//                     <label>Email:-</label>
//                     <input type="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
//                 </div><br /><br />

//                  <div>
//                     <label>Date:-</label>
//                     <input type="date" name="date" placeholder='Enter Your Date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
//                 </div><br /><br />

//                  <div>
//                     <label>Address.:-</label>
//                     <input type="address" name="address" placeholder='Enter Your Address' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
//                 </div><br /><br/>


//                  <div>
//                 <button type='submit'>Submit</button>
//                 </div>

//                <div>
//                 <p>Already have an account ?</p> 
//                </div>

//                 <div>
//                <a href="a">Login</a>
//                </div>
//             </form>
//         </div>
//     )
// }

//  import React, { useState } from 'react';

//    export default function SignUp(){
//     const hndleSubmit=(e)=>{
//          e.preventDefault();
//          const name = e.target.name.value;
//          const number = e.target.number.value;
//          const password = e.target.password.value;
//          console.log(name,number,password);
//     }
//      return (
//          <div>
//             <h1>SignUp</h1>

//               <form onSubmit={hndleSubmit}>
//                  <div>
//                      <label>Name:-</label>
//                      <input type="text" name="name" placeholder='Enter Your Name' required/>
//                     </div><br /><br />

//                   <div>
//                      <label>Number:-</label>
//                      <input type="text" name="number" placeholder='Enter Your Number' required/>
//                      </div><br /><br />

//                     <div>
//                       <label>Password:-</label>
//                      <input type="text" name="password" placeholder='Enter Your Password' required/>
//                      </div><br /><br />

//                      <div>
//                    <button type='submit'>Submit</button>
//                    </div>


//                     <div>
//                  <p>Already have an account ?</p> 
//                  </div> 

//                   <div>
//                  <a href="a">Login</a>
//                  </div>
//                      </form>
//                      </div>
//      )
//     }


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'


export default function SignUp() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.length || !number.length || !password.length || !email.length || !date.length || !address.length) {
            alert("Please Fill All The Details");
            return;
        }
        const userData = {
            name, number, password, email, date, address
        };
        console.log(userData);
    };

    return (
        <div className='SignUp1'>
            <h2 className='fill'>Sign-Up</h2>

            <form onSubmit={handleSubmit}>

                <div className='handle'>
                    <div className='handle1'>
                        <div className="NameName">
                            <label className="NameName1">Name:-</label>
                            <input type="text" className='Name1' name="name" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div><br />

                        <div className="NameName">
                            <label className="NameName2">Number:-</label>
                            <input type="number" className='Name11' name="number" placeholder='Enter Your Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div><br />

                        <div className="NameName">
                            <label className="NameName3">Password:-</label>
                            <input type="password" className='Name111' name="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <p className='Forget'>Forget Password ?</p>
                        </div><br />

                        <div className="NameName">
                            <label className="NameName1">Email:-</label>
                            <input type="email" className='Name1111' name="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div><br />

                        {/* <div>
                    <label className="Name1">Date:-</label>
                    <input type="date" name="date" placeholder='Enter Your Date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div><br /><br /> */}

                        <div className="NameName">
                            <label className="NameName3">Address.:-</label>
                            <input type="address" className='Name11111' name="address" placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div><br />


                        <div className="NameName4">
                            <button type='submit' className="clickme">Submit</button>
                        </div>
                    </div>

                    <div className='Account'>

                        <div className='Account1'>
                            <p className="Name111111">Already have an account ?</p>
                        </div>

                        <div className="NameName5">
                            <button type='submit' className="clickme1">YES</button>
                            <button type='submit' className="clickme1">NO</button>
                        </div>
                    </div>
                </div>


            </form>
        </div>
    )
}