import "./Register.css";
import { ethers } from "ethers";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Navbar from "../Navbar/Navbar";
import userRegistrationContract from "../../ContractInfo/UserRegistrationContract";

function Register() {
    const [form, setForm] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        ethAddress: "",
        type: "",
    });

    const navigate = useNavigate(); // Use useNavigate to handle navigation

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    async function handleClick() {
        const requestBody = {
            username: form.username,
            name: form.name,
            email: form.email,
            password: form.password,
            phoneNumber: form.phoneNumber,
            address: form.address,
            ethAddress: form.ethAddress,
        };

        if (!form.type) {
            alert("Please fill the form correctly");
            window.location.reload();
        }

        console.log(requestBody);

        let response;
        try {
            if (form.type === "client") {
                response = await axios.post(
                    "https://back-end-ty14.vercel.app/api/auth/client/signup",
                    requestBody
                );
            } else if (form.type === "contractor") {
                response = await axios.post(
                    "https://back-end-ty14.vercel.app/api/auth/contractor/signup",
                    requestBody
                );
            }
        } catch (error) {
            console.log(error.response.data.msg);
            alert(error.response.data.msg);
            window.location.reload();
        }

        console.log(response);
        console.log("-------------------------------------");
        const userId = response.data.userId;
        console.log(userId);
        console.log("-------------------------------------");

        alert(response.data.msg);
        navigate("/login");
    }

    return (
        <>
            <Navbar />
            <div className="regi">
                <div className="regi-block">
                    <h1>Register</h1>

                    <div className="email-block">
                        <div className="name">
                            <p>Name</p>
                            <input
                                type="text"
                                value={form.name}
                                name="name"
                                placeholder="Enter Name here.."
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="email">
                            <p>E-mail</p>
                            <input
                                type="text"
                                value={form.email}
                                name="email"
                                placeholder="Enter Email here.."
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div className="user">
                        <p>Username</p>
                        <input
                            type="text"
                            value={form.username}
                            name="username"
                            placeholder="Enter Username here.."
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="password">
                        <p>Password</p>
                        <input
                            type="password"
                            value={form.password}
                            name="password"
                            placeholder="Enter Password here.."
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="contact">
                        <p>Contact Number</p>
                        <input
                            type="tel"
                            value={form.phoneNumber}
                            name="phoneNumber"
                            placeholder="Enter Contact here.."
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="h-address">
                        <p>Address</p>
                        <input
                            type="text"
                            value={form.address}
                            name="address"
                            placeholder="Enter Address here.."
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="eth-userid">
                        <p>Wallet Address</p>
                        <input
                            type="text"
                            value={window.ethereum.selectedAddress}
                            onChange={(e) => handleChange(e)}
                            name="ethAddress"
                            placeholder="Enter Wallet Address here.."
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
                        <option value="contractor">Contractor</option>
                    </select>

                    <button onClick={handleClick}>Register</button>
                    <span>
                        Forgot <NavLink to="#">password</NavLink>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Register;
