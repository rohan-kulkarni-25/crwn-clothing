import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../context/user.context";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   return;
    // }
    console.log("yes");
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log("user creation encountered an error", error.message);
    }
  };

  return (
    <div>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
        />
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
        <FormInput
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
