import { assert, expect } from 'chai';
import axios from 'axios';
import dotenv from 'dotenv';
// import storeToken from './setEnvVar.js';
dotenv.config();

describe("Login User Test", () => {
    it("User login test", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/login`, {
            "email": `${process.env.email}`,
            "password": `${process.env.password}`,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Log the response data to verify the output
        console.log(data);
        // console.log(responseData);

        // Check if the first employee has an id of 101
        expect(data.message).to.equal("Login successful"); // Correct assertion syntax
        assert(data.message.includes("Login successful"));
        // storeToken('token', data.token);
    })
});
