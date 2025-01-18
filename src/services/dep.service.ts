import axios from "axios";

export const createDepartment = async (formData: FormData) => {
    const response = await axios.post("/api/departments", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};


export const getDepartments = async () => {
    const response = await axios.get("/api/departments");
    return response.data;
};