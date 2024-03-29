import React, { useContext } from 'react'
import { CountCT } from '../../layout/client'

type Props = {}

const Login = (props: Props) => {
  const [state,setState] = useContext(CountCT) as any
  return (
    <>
   <div className="bg-overlay">
   <button type="button" onClick={()=>{setState({type:'close'})}}>Close</button>
   <form>
    
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   </div>
    </>
  )
}

export default Login