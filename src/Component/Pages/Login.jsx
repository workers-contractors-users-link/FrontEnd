import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useStateContext } from "../../context/context";

const baseUrl = "https://back-end-ty14.vercel.app/api/auth";
const baseUrl2 = "http://localhost:8080/api/auth";

function Login() {
    const [form, setForm] = useState({
        credentials: "",
        password: "",
        type: "",
    });

    const { user } = useStateContext();
    const navigate = useNavigate(); // Use useNavigate to handle navigation

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    async function handleClick() {
        const requestBody = {
            credentials: form.credentials,
            password: form.password,
        };

        console.log(requestBody);

        try {
            let response;

            if (form.type === "client") {
                response = await axios.post(
                    `${baseUrl2}/client/login`,
                    requestBody
                );
            } else if (form.type === "constructor") {
                response = await axios.post(
                    `${baseUrl2}/contractor/login`,
                    requestBody
                );
            }
            console.log(response);
            user.name = response.data.user.name;
            user.email = response.data.user.email;
            user.phoneNumber = response.data.user.phoneNumber;
            user.address = response.data.user.address;
            user.kycVerified = response.data.user.kycVerified;
            localStorage.setItem("token", response.data?.token);
            localStorage.setItem("type", response.data?.user.type);
            alert(response.data.msg);
        } catch (error) {
            console.error(error.response.data.msg);
            alert(error.response.data.msg);
        }
    }

    return (
        <>
            <Navbar />
            <div className="log-in">
                <div className="box">
                    <h1>Login</h1>
                    <div className="user">
                        <p>Username/Email</p>
                        <input
                            type="text"
                            placeholder="Enter Username/Email"
                            value={form.credentials}
                            name="credentials"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="pass">
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={form.password}
                            name="password"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <select
                        value={form.type}
                        onChange={(e) => handleChange(e)}
                        name="type"
                        className="select"
                    >
                        <option value="" disabled selected hidden>
                            Please Role...
                        </option>
                        <option value="client">Client</option>
                        <option value="constructor">Constructor</option>
                    </select>
                    <button onClick={handleClick}>Log in</button>{" "}
                </div>
            </div>
        </>
    );
}

export default Login;
