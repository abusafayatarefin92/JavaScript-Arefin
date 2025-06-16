import { assert, expect } from 'chai';
import axios from 'axios';
import dotenv from 'dotenv';
import storeEnv from '../utils/setEnvVar.js';
import {faker} from '@faker-js/faker';
import utils from '../utils/utils.js';
dotenv.config();

describe("Automate Dmoney API", () => {
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

        console.log(data);

        // expect(data.message).to.equal("Login successful"); // Correct assertion syntax
        assert(data.message.includes("Login successful"));
        storeEnv('token', data.token);
    })

    it.only('Search User', async () =>{
        const {data} = await axios.get(`${process.env.base_url}/user/search/id/${process.env.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`
            }
        })
        console.log(data)
        assert(data.message.includes("User found"))
    })

    it("Create New User", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/create`, {
            "name": "Axios user 2025061601",
            "email": "axiosuser2025061601@gmail.com",
            "password": "1234",
            "phone_number": "01202506161",
            "nid": "8437465298",
            "role": "Customer"
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-Auth-SECRET-KEY": `${process.env.secretKey}`
            }
        });

        // Log the response data to verify the output
        // console.log(data.token);
        console.log(data);

        // Check if the first employee has an id of 101
        // expect(data.message).to.equal("Login successful"); // Correct assertion syntax
        assert(data.message.includes("User created"));
    })

    it("Create New User with Faker", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/create`, {
            "name": `${faker.person.fullName()}`,
            "email": `${faker.internet.email().toLocaleLowerCase()}`,
            "password": "1234",
            "phone_number": `0120${utils(1000000, 9999999)}`,
            "nid": "8437465298",
            "role": "Customer"
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-Auth-SECRET-KEY": `${process.env.secretKey}`
            }
        });

        console.log(data);
        storeEnv("id", data.user.id);
        storeEnv("email", data.user.email);
        storeEnv("phoneNumber", data.user.phone_number);

        // Check if the first employee has an id of 101
        // expect(data.message).to.equal("Login successful"); // Correct assertion syntax
        assert(data.message.includes("User created"));
    })
});
