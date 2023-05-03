import React from 'react'
import styles from './Form.module.css';
import validate from './../validation.js'

export default function Form(props) {
    let [userData, setUserData] = React.useState({ 
                              email:'maximo.chertudi@gmail.com', 
                              password:'Password!'});

    let [errors, setErrors] = React.useState({});
  
  
    function handleChange(evento) {
      setUserData({...userData, [evento.target.name]: evento.target.value});
      setErrors(validate({...userData, [evento.target.name]: evento.target.value}));
    }
  
    function handleSubmit(evento) {
      evento.preventDefault();
      props.login(userData); 
    }
  
    return (
      
    <div id='form' className={styles.Form}>
        <form onSubmit={handleSubmit}> 
        <br />
        <label>Email:  </label>
        <input type='text' placeholder='Escribe tu email...' name='email' 
          value={userData.email} onChange={handleChange}
          className={errors.email && 'warning'}/>

        <p className='danger'>{errors.email}</p>
        
        <br/>
        <br/>
        <label>Password:  </label>
        <input type='text' placeholder='Escribe tu password...' name='password' 
          value={userData.password} onChange={handleChange}
          className={errors.password && 'warning'}/>
        
        <p className='danger'>{errors.password}</p>
        <br /><br />
        <button type='submit'> Submit </button>
      </form>
     </div>
    )
  }
  