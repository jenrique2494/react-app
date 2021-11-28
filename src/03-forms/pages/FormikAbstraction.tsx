import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {  } from '../components/MyTextInput';
import '../styles/styles.css';
import { MyTextInput, MySelect,MyCheckbox } from '../components';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik 
                initialValues={{
                    firstName:'Enrique',
                    lastName:'',
                    email:'',
                    terms:false,
                    jobType:'',
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName:Yup.string()
                                    .max(15,'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName:Yup.string()
                                    .max(10,'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                    email:Yup.string()
                                    .email('El correo no tiene un formato valido')
                                    .required('Requerido'),
                    terms:Yup.boolean()
                                    .isTrue('Debe de aceptar las condiciones')
                                    .required(),
                    jobType:Yup.string()
                                    .notOneOf(['it-jr'],'Esta opción no es permitida')
                                    .required()
                })}
            >
                
                {//children del high order component de Fomik
                    (formik)=>(<Form>
                        <MyTextInput 
                            label={'First Name'} 
                            name={'firstName'}
                            placeholder="First Name" 
                        />
                        <MyTextInput 
                            label={'Last Name'} 
                            name={'lastName'}
                            placeholder="Last Name" 
                        />
                        <MyTextInput 
                            label={'Email Address'} 
                            name={'email'}
                            placeholder="Email Address" 
                            type="email"
                        />
                        <MySelect name="jobType" label={'Pick Something'} >
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>
                        <MyCheckbox name="terms" type="checkbox" label={'Terms & Conditions'} />

                        <button type="submit">Submit</button>
                    </Form>)
                }
                
            </Formik>
        </div>
    )
}
