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


// export const getByIdUser = async (_id) => {
//     console.log('Function called with _id:', _id);
//     try {
//         const formattedId = String(_id).trim();
//         const response = await axios.get(`https://four-seasons-backend.onrender.com/api/user/getUserById`, {
//             params: {
//                 _id: formattedId
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching admin:", error);
//         throw error;
//     }
// };

export const getByIdUser = async (id) => {
    console.log('Function called with id:', id);
    try {
        const response = await axios.get(`https://four-seasons-backend.onrender.com/api/user/getUserById/${id}`);
        console.log('Responsedata:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};
