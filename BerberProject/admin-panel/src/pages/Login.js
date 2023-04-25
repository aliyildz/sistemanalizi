import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';
import { useEffect } from 'react';

const Login = () => {

  const {user, setUser} = useUser();


  const navigate = useNavigate();

  const email = "admin@gmail.com";
  const password = "ali";


    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: async (values, {resetForm}) => {

          if(values.email === email && values.password === password){

            const account = {
              email: email,
              password: password
            }
                  
              setUser(account)
              localStorage.setItem("user", JSON.stringify(account))
            
            resetForm();
          }          

        },
      });

      useEffect(() => {
        user && navigate("/")
      }, [navigate, user])

  return (
    <div className='login'>
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit}>
            <input type="email" name='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email} />
            <input type="password" name='password' placeholder='Password' onChange={formik.handleChange} value={formik.values.password} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login