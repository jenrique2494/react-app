import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { formData, onChange, name,email,password1,password2, resetForm, isValidEmail }=useForm({
        name:'',
        email:'',
        password1:'',
        password2:'',
    });

    const onSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Name" 
                    name="name"
                    value={name}  
                    onChange={onChange} 
                    className={`${name.trim().length<=0 && 'has-error'}`}   
                />
                {name.trim().length<=0 && <span>Este Campo es Necesario</span>}
                <input 
                    type="email"
                    placeholder="Email" 
                    name="email"
                    value={email} 
                    onChange={onChange} 
                    className={`${!isValidEmail(email) && 'has-error'}`}    
                />
                {!isValidEmail(email) && <span>El Email es Necesario</span>}
                <input 
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1} 
                    onChange={onChange}   
                    className={`${password1.trim().length<=0 && 'has-error'}`}   
                />
                {password1.trim().length<=0 && <span>Este Campo es Necesario</span>}
                {password1.trim().length<=6 && password1.trim().length && <span>La contraseña tiene que tener minimo 6 letras</span>}
                <input 
                    type="password"
                    placeholder="Repeat Password" 
                    name="password2"
                    value={password2} 
                    onChange={(e)=>onChange(e)} 
                    className={`${password2.trim().length<=0 && 'has-error'}`}     
                />
                {password2.trim().length<=0 && <span>Este Campo es Necesario</span>}
                {password2.trim().length>0 && password1!==password2 && <span>Las contraseñas deben de ser iguales</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}
