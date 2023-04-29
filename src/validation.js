
function validate(inputs) {
    const regExp_EsEmail = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
    const regExp_password = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{6,10}))'); 
    let err = {email:'', password:''};
    
    if (!regExp_EsEmail.test(inputs.email))
        err.email = 'Debe ser un email valido';
    if (!regExp_password.test(inputs.password))
        err.password = 'Password debe tener una mayuscula, caracter especial y de 6-10 caracteres';

    return err;
}

export default validate; 