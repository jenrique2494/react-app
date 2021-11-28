import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';

const initialValues:{[key:string]:any}={};

const requiredFields:{[key:string]:any}={};

for (const input of formJson) {
    initialValues[input.name]=input.value;
    if(!input.validations || input.validations?.length===0) continue;

    let schema= Yup.string()
    for (const rule of input.validations) {
        if(rule.type==="required"){
            schema=schema.required('Este Campo es  Requerido');
        }

        if(rule.type==="minLength"){
            schema=schema.min((rule as any).value || 2,`Minimo de ${(rule as any).value || 2} caracteres`);
        }

        if(rule.type==="email"){
            schema=schema.email('el correo no tiene formato valido');
        }
        //.... otras reglas
    }
    requiredFields[input.name]=schema;
}

const validationSchema= Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Forms</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {
                    (formik)=>(
                        <Form>
                            {
                                formJson.map(({type,name, placeholder, label,options})=>{
                                    if(type=== "input" || type==="password"|| type==="email"){
                                        return <MyTextInput 
                                                    label={label} 
                                                    name={name} 
                                                    type={type as any} 
                                                    placeholder={placeholder} 
                                                    key={name}
                                                />
                                    }
                                    if(type==="select"){
                                        return <MySelect 
                                                    label={label} 
                                                    name={name} 
                                                    key={name}
                                                >
                                                    <option value="">Select an Option</option>
                                                    {
                                                       options?.map(({id,label})=>(
                                                        <option key={id} value={id}>{label}</option>
                                                       )) 
                                                    }
                                                </MySelect>
                                    }
                                    return <span> Type:{type} no es soportado </span>
                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
