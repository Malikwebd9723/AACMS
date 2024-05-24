import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const States = ({ children }) => {
    const navigation = useNavigate()
    const[user,setUser] = useState([]);
    const host = "http://localhost:8002";

    const handleRegister = async ({firstname, lastname, email}) => {
        try {
            const response = await fetch(`${host}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstname, lastname, email} )
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
            } else {
                alert(json.message)

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }


    // check user is logged in or not
    const checkLoggedInStatus = async()=>{
        const user = await localStorage.getItem("userId");
        if (user) {
            navigation("/admin")
        }
    }


    const handleLogin = async ({email,password}) => {
        try {
            const response = await fetch(`${host}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password} )
            });
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('userId',json.userId)
                navigation("/admin")
            } else {
                alert(json.message)
            }

        } catch (error) {
            alert("Server Error. Faild to logged in!")
        }
    }

    const handleLogout = async()=>{
        await localStorage.clear("userId")
        navigation("/")
    }

    const getProfileData = async()=>{
        try {
            const id =await localStorage.getItem("userId");
            const response = await fetch(`${host}/profileData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id} )
            });
            const json = await response.json();
            if (json.success) {
                await setUser(json.user);
            } else {
                alert(json.message)
            }

        } catch (error) {
            alert("Server Error. Faild to logged in!")
        }

    }

    const handleUpdateProfile = async({firstname,lastname})=>{
        try {
            const id =await localStorage.getItem("userId");
            const response = await fetch(`${host}/updateProfile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id,firstname,lastname})
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
                getProfileData()
            } else {
                alert(json.message)
            }

        } catch (error) {
            alert("Server Error. Faild to logged in!")
        }
    }

    const handleUpdatePass = async({oldPass,newPass})=>{
        try {
            const id =await localStorage.getItem("userId");
            const response = await fetch(`${host}/updatePass`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id,oldPass,newPass})
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
            } else {
                alert(json.message)
            }

        } catch (error) {
            alert("Server Error. Faild to logged in!")
        }
    }

    return (
        <Context.Provider value={{handleRegister,handleLogin,getProfileData,user,checkLoggedInStatus,handleLogout,handleUpdateProfile,handleUpdatePass}}>
            {children}
        </Context.Provider>
    );
}

export { Context, States };
