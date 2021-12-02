import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const HandleClickRegister = (values) => console.log(values);
  const HandleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup
    .string()
    .email("Não é um email")
    .required("Este campo é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve ter 8 caracteres")
    .required("Este campo é obrigatório"),
  });

  const validationRegister = yup.object().shape({
    email: yup
    .string()
    .email("Não é um email")
    .required("Este campo é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve ter 8 caracteres")
    .required("Este campo é obrigatório"),
    confirPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });


  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}} 
      onSubmit={HandleClickLogin}
      validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-fomr-group">
            <Field name="email" 
            className="form-field" 
            placeHolder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
            </div>

            <div className="login-fomr-group">
            <Field name="password" 
            className="form-field" 
            placeHolder="Password" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
            </div>
           <button className="button" type="submit">Login</button>
        </Form>
      </Formik> 
      
      
      <h1>Cadastro</h1>
      <Formik initialValues={{}} 
      onSubmit={HandleClickRegister}
      validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-fomr-group">
            <Field name="email" 
            className="form-field" 
            placeHolder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
            </div>

            <div className="login-fomr-group">
            <Field name="password" 
            className="form-field" 
            placeHolder="Password" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
            </div>
            
            <div className="login-fomr-group">
            <Field name="confirmPassword" 
            className="form-field" 
            placeHolder="Confirme sua senha" />

            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
            </div>
           
           <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Formik>      
    </div>
  );
}

export default App;
