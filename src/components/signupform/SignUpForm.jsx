import { useState } from "react";
import "./signUpForm.style.css";

const getDefaultForm = {
  name: "",
  date: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
    const [getForm, setGetForm] = useState(getDefaultForm);
    const [submitedFormData, setSubmitFormData] = useState(false);


    const onSubmitHandler = (e)=> {
        e.preventDefault();
        console.log(getForm);
        setSubmitFormData(true);
        
    }

    const onChangeHandler = (e) => {
        setGetForm({ ...getForm, [e.target.name]: e.target.value });
    }

    return (
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={onSubmitHandler}>
                <input
                    value={getForm.name}
            type="text"
            name="name"
            onChange={onChangeHandler}
            placeholder="Name"
          />
                <input
                    value={getForm.date}
            type="date"
            name="date"
            onChange={onChangeHandler}
            placeholder="DateOfBirth"
          />
                <input
                    value={getForm.password}
            type="password"
            name="password"
            onChange={onChangeHandler}
            placeholder="Password"
          />
                <input
                    value={getForm.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={onChangeHandler}
            placeholder="ConfirmPassword"
                />
                <button type="submit">Sign Up</button>
                {submitedFormData && getForm.password !== getForm.confirmPassword && <h2>Password not matching!</h2>}
        </form>
      </div>
    );
}

export default SignUpForm;