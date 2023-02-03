import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        default:
          break;
      }
      console.log("user creation encountered an error", error.message);
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
        />
        <FormInput
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
