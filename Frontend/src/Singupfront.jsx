
import { Link } from 'react-router-dom'
import './Singup.css'
const Singup = ({btnhader, name, email, password, message}) => {

    return(


    <div>
      
      <form onSubmit={btnhader}>
        <h2>User Signup</h2>
        <div>
          <label>Full Name</label>
          <input type="text" name="name" required ref={name} />
        </div>

        <div>
          <label>Email Address</label>
          <input type="email" name="email" required ref={email} />
        </div>

         <div>
          <label>Password</label>
          <input type="password" name="password" required ref={password} />
        </div>

        <button type="submit">Submit</button>
        {message && <p>{message}</p>}

        <p style={{ textAlign: 'center' }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      </form>
      
    </div>

    )
}

export default Singup;
