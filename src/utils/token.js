export const setToken = (token) => {
    localStorage.setItem("token", token);
}


export const getToken = () => {
    return localStorage.getItem("token");
}

export const getUserDetails = (token) => {
    // token => user.name, user.userName
}
