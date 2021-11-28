
import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik 
                initialValues={{
                    name:'Enrique',
                    email:'',
                    password1:'',
                    password2:'',
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name:Yup.string()
                                    .max(15,'Debe de tener 15 caracteres o menos')
                                    .min(2,'Debe de tener minimo 2 caracteres')
                                    .required('Requerido'),
                    email:Yup.string()
                                    .email('El correo no tiene un formato valido')
                                    .required('Requerido'),
                    password1:Yup.string()
                                    .min(6,'Debe de tener minimo 6 caracteres')
                                    .required(),
                    password2:Yup.string()
                                    .oneOf([Yup.ref('password1')],'Las contraseñas deben de ser iguales')
                                    .required()
                })}
            >
                {//children del high order component de Fomik
                    ({handleReset})=>(
                        <Form>
                            <MyTextInput 
                                label={'Name'} 
                                name={'name'}
                                placeholder="Name" 
                            />
                            <MyTextInput 
                                label={'Email Address'} 
                                name={'email'}
                                placeholder="Email Address" 
                                type="email"
                            />
                            <MyTextInput 
                                label={'Password'} 
                                name={'password1'}
                                placeholder="Password" 
                                type="password"
                            />
                            <MyTextInput 
                                label={'Repeat Password'} 
                                name={'password2'}
                                placeholder="Repeat Password" 
                                type="password"
                            />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset} >Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
