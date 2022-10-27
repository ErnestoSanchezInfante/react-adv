import { useFormik, Formik , Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

   
  return (
    <div>
        <h1>Formik Yup Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email:'',
                terms: false,
                jobType:''
            }}
            onSubmit={ ( values ) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o mmenos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o mmenos')
                                    .required('Requerido'),
                    email: Yup.string()
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .oneOf([true],'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'Esta opcion no es permitida')
                                    .required('Requerido')
                })
            } >

                {
                    (formik) => (
                        <Form >
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </Field>    
                            <ErrorMessage name="jobType" component="span"/>

                            <label >
                                <Field name="terms" type="checkbox"/>
                                Terms and conditions</label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

        </Formik>

    </div>
  )
}
