
import './Singup.css'
const Singup = ({btnhader, name, email, message}) => {

    return(


    <div>
      <form onSubmit={btnhader}>
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
          <input type="text" name="password" required  />
        </div>

        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>

    )
}

export default Singup;
