import validator from 'validator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        isTouched: false,
    });
    const [tel, setTel] = useState('');
    const [request, setRequest] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorTel, setErrorTel] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const getFormIsValid = () => {
        return(
            firstName &&
            lastName &&
            validator.isEmail(email)&&
            validator.isNumeric(tel) &&
            password.value.length >= 6
        );
    };

    return (
        <main className="login">
            <h1 className='heading1'>Little Lemon</h1>
            <h3 className='heading2'>Chicago</h3>
            <p className='p1'>Sign in to collect points</p>
            <form onSubmit={handleSubmit}>
                <fieldset className="loginForm">
                    <label htmlFor='Fname' data-testid="firstname">
                        <input
                        id='Fname'
                        name="Fname"
                        type='text'
                        placeholder = '*First Name'
                        value={firstName}
                        onChange={e => {
                            setFirstName(e.target.value)
                        }}
                        onBlur={()=>{
                            setErrorFirstName(true)
                        }}
                        />
                        {errorFirstName && firstName.length<= 0 ? <div className='errorMessage'>*First name is required</div>: 'Enter your first name'}
                    </label>
                    <label data-testid="lastname">
                        <input
                        name="Lname"
                        type='text'
                        placeholder = '*Last Name'
                        value={lastName}
                        onChange={e => {
                            setLastName(e.target.value)
                        }}
                        onBlur={()=>{
                            setErrorLastName(true)
                        }}
                        />
                        {errorLastName && lastName.length<= 0 ? <div className='errorMessage'>*Last name is required</div>: 'Enter your last name'}
                    </label>
                    <label data-testid="phonenumber">
                        <input
                        name="tel"
                        type='number'
                        placeholder = '*Phone Number'
                        value={tel}
                        onChange={e => {
                            setTel(e.target.value)
                        }}
                        onBlur={()=>{
                            setErrorTel(true)
                        }}
                        />
                        {errorTel && tel.length<= 0 ? <div className='errorMessage'>*Phone number is required</div>: 'Enter your phone number'}
                    </label>
                    <label data-testid="email">
                        <input
                        name="email"
                        type='email'
                        placeholder = '*Email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                        onBlur={()=>{
                            setErrorEmail(true)
                        }}
                        />
                        {errorEmail && email.length<= 0 ? <div className='errorMessage'>*Email is required</div>: 'Enter your email'}
                    </label>
                    <label className='passwordField' data-testid="password">
                        <input
                        name='password'
                        value={password.value}
                        onChange={e => {
                            setPassword({...password, value: e.target.value});
                        }}
                        onBlur ={() =>{
                            setPassword({...password, isTouched: true});
                        }}
                        type={showPassword ? 'text' : 'password'}
                        placeholder = '*Password'
                        itemProp=''
                        />
                        <span className='eyeIcon' onClick={handleTogglePassword}>
                            <FontAwesomeIcon
                            icon={showPassword ? faEye: faEyeSlash}
                            />
                        </span>
                        {password.isTouched && password.value.length < 6 ? <div className='errorMessage'>*Password should have at least 6 characters</div>: '6 - character password'}
                    </label>
                    <label>
                        <textarea
                        placeholder="Add a special request (optional)"
                        value={request}
                        onChange={e => {
                            setRequest(e.target.value)
                        }}
                        />
                    </label>
                    <Link to='/confirmation'>
                    <button className='button' type="submit" disabled = {!getFormIsValid()} aria-label="On Click">
                        Book
                    </button>
                    </Link>
                </fieldset>
            </form>
        </main>
    );
}

export default Login;