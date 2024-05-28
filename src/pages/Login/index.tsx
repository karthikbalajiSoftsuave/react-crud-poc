/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import PoorvikaLogo from "../../assets/icons/poorvika_logo.svg"
import LoginBanner from "../../assets/images/login-banner.svg"
import { showNotification, STATUS } from "../../common/constants";
import { ActionButton } from "../../components/ActionButton";
import { TextBox } from "../../components/TextBox";
import { ILogin } from "../../interface/login.interface";
import { setUserDetails } from "../../redux/Actions/actions";
import { AuthService } from "../../services/classService/authService";
import { LoginService } from "../../services/functionalService/authService";
import "./styles.scss"

type Tprops = {

}
type formFields = {
    email: string,
    password: string,
    isTerms: boolean
}

export const LoginPage: React.FC<Tprops> = () => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<formFields>({ mode: "all" });
    const dispatch = useDispatch()
    const authService = new AuthService()

    const onSubmit = async (values: formFields) => {
        const loginData: ILogin = {
            email: values?.email,
            password: values?.password,
        }
        const login = await authService.SignIn(loginData)

        if (login.status === STATUS.SUCCESS) {
            dispatch(setUserDetails(login?.data))
            showNotification(STATUS.SUCCESS, login?.message)
        }
        else {
            showNotification(STATUS.FAILURE, login?.message)
        }
    }

    const validations = {
        email: {
            required: { value: true, message: "Email field is empty" },
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Enter Valid Email" }
        },
        password: {
            required: { value: true, message: "Password field is empty" },
            minLength: { value: 6, message: "Password must be at least 6 characters long" }
        },
        isTerms: {
            required: { value: true, message: "Please accept terms & condition" },
            pattern: { value: true, message: "Please accept terms & condition" }
        }
    }
    console.log("errors", errors);

    return (
        <div className="login">
            <div className="left-side">
                <div className="header">
                    <img alt="menu-logo" draggable="false" src={PoorvikaLogo} />
                    <a href="#" >Don’t have an account? Register Now</a>
                </div>
                <div className="mainSec">
                    <div className="leftImg">
                        <h1>Welcome to <span>Poorvika</span></h1>
                        <img src={LoginBanner} alt="" />
                    </div>
                    <div className="loginCard">
                        <h2>Log in</h2>
                        <p>Welcome Back! We are happy to see you again</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextBox
                                label="Email"
                                autoComplete="off"
                                placeholder="johnn@gmail.com"
                                register={register("email", validations.email)}
                                error={errors.email?.type !== undefined}
                                errorText={errors.email ? errors.email.message : ""}
                            />
                            <TextBox
                                autoComplete="off"
                                label="Password"
                                type={"password"}
                                placeholder="xxxxxxxxxxx"
                                register={register("password", validations.password)}
                                error={errors.password?.type !== undefined}
                                errorText={errors.password ? errors.password.message : ""}
                            />
                            <div className="checkInput">
                                <input type="checkbox" onChange={(e: any) => setValue("isTerms", e.target.checked)} />
                                <label htmlFor="">I agree to Poorvika’s <span>Privacy Policy & Terms</span></label>
                                {errors.isTerms?.type && <p className="error">{errors.isTerms.message ?? ""}</p>}
                            </div>
                            <ActionButton type="submit" variant="primary" name="Submit" />
                        </form>
                        <a href="#">Forgot Password?</a>
                        <ActionButton variant="secondary" name="SSO Login" />
                    </div>
                </div>
            </div>
        </div>
    )
}