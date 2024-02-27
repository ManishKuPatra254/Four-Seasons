import axios from "axios";

export const SignupUser = async (formData) => {
    console.log(formData);

    try {
        const response = await axios.post(`https://four-seasons-backend.onrender.com/api/user/signupuser`, formData);
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error.msg)
    }
}


export const LoginUser = async (formData) => {
    console.log(formData, "formdtatakjhgfd");
    try {
        const response = await axios.post(`https://four-seasons-backend.onrender.com/api/user/loginuser`, formData)
        console.log(response, "sdjsbfhs")
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}