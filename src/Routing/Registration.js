import React from 'react'
import "../Routing/Style.css"
function Registration() {
  return (
    <div>
           <div className='register-container'>
            <h2>Register Here</h2>
            <div  className='input-fields'>
                <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name'/>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email'/>
                </div>
                <div>
                <label htmlFor='number'>Contact No</label>
                <input type='number' name='number' id='number'/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
                  </div>
                <div>
                    <button>submit</button>
                </div>
                
            </div>
               
           </div>

    </div>
  )
}

export default Registration