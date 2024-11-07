import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextFeild } from "../Demo";  // named import


const Form = () => {

    const [formData, setFormdata] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
        mobNum: "",
        altMobNum: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormdata({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello "${formData.fname} ${formData.lname}", and your email was "${formData.email}"`);
    }

    return (
        <div data-testid="wrapdiv">
            <header className="header-form">
                <div>
                    <Link to="/">
                        <button className="form-back-btn" data-testid="btn">
                            Go Back
                        </button>
                    </Link>
                    <h2 className="form-h2-tag"> Form for testing the input feilds</h2>
                </div>
            </header>
            <body>
                <div className="test-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname">Enter Firstname*</label><br></br>
                        <TextFeild type="text"
                            placeholder="Enter Your Firstname"
                            name="fname"
                            value={formData.fname || ""}
                            onChange={handleChange}
                            dataTestId='fname-input'
                            autoComplete="off"
                            id="firstname"
                        /><br></br><br></br>

                        <label htmlFor="lastname">Enter Lastname*</label><br></br>
                        <TextFeild type="text"
                            placeholder="Enter Your Lastname"
                            name="lname"
                            value={formData.lname || ""}
                            onChange={handleChange}
                            dataTestId='lname-input'
                            autoComplete="off"
                            id="lastname"
                        /><br></br><br></br>

                        <label htmlFor="email">Enter E-mail*</label><br></br>
                        <TextFeild type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            dataTestId='email-input'
                            autoComplete="off"
                            id="email"
                        /><br></br><br></br>

                        <label htmlFor="mobile-number">Enter Mobile Number*</label><br></br>
                        <TextFeild type="number"
                            placeholder="Enter Your Mobile Number"
                            name="mobile-number"
                            value={formData.mobNum || ""}
                            onChange={handleChange}
                            dataTestId='mobnum-input'
                            autoComplete="off"
                            id="mobile-number"
                            maxLength="10"
                        /><br></br><br></br>

                        <label htmlFor="alter-mobnum">Alternate Mobile</label><br></br>
                        <TextFeild type="number"
                            placeholder="Alternate Mobile Number"
                            name="alter-mobnum"
                            value={formData.altMobNum || ""}
                            onChange={handleChange}
                            dataTestId='altMobNum-input'
                            autoComplete="off"
                            id="alter-mobnum"
                            maxLength="10"
                        /><br></br><br></br>

                        <label htmlFor="password">Enter Password*</label><br></br>
                        <TextFeild type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password || ""}
                            onChange={handleChange}
                            dataTestId='password-input'
                            autoComplete="off"
                            id="password"
                        /><br></br><br></br>

                        <label htmlFor="cpassword">Confirm Password*</label><br></br>
                        <TextFeild type="password"
                            placeholder="Enter confirm password"
                            name="confirmpass"
                            value={formData.cpassword || ""}
                            onChange={handleChange}
                            dataTestId='cpass-input'
                            autoComplete="off"
                            id="cpassword"
                        />
                        <br></br><br></br>

                        {/* <TextFeild type="submit"
                    value="submit"
                    dataTestId='submit-btn'
                /> */}
                        <button className="form-btn-submit" data-testid='submit-btn'>
                            submit
                        </button>
                    </form>
                </div>
            </body>
        </div>
    );
}
export default Form;