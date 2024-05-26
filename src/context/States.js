import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const States = ({ children }) => {
    const navigation = useNavigate()
    const [user, setUser] = useState([]);
    const [clients, setClients] = useState([]);
    const [cases, setCases] = useState([]);
    const[fee,setFee] = useState(0);
    const[totalFee,setTotalFee] = useState(0)
    const host = "http://localhost:8002";

    const fullDate = new Date();
    const today = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const date = `${year}-${month < 10 ? '0' + month : month}-${today}`;


    const feeRecieved =async()=>{
        let amount = 0
        let totalAmount = 0
        await cases.map((item)=>{
            amount = amount + item.paidFee
            const feeAfterDiscount = item.totalFee-item.discount
            totalAmount = totalAmount + feeAfterDiscount
        })
        setFee(amount);
        setTotalFee(totalAmount);
    }

    const handleRegister = async ({ firstname, lastname, email }) => {
        try {
            const response = await fetch(`${host}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstname, lastname, email })
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
    const checkLoggedInStatus = async () => {
        const user = await localStorage.getItem("userId");
        if (user) {
            navigation("/admin")
        }
    }


    const handleLogin = async ({ email, password }) => {
        try {
            const response = await fetch(`${host}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('userId', json.userId)
                navigation("/admin")
            } else {
                alert(json.message)
            }

        } catch (error) {
            alert("Server Error. Faild to logged in!")
        }
    }

    const handleLogout = async () => {
        await localStorage.clear("userId")
        navigation("/")
    }

    const getProfileData = async () => {
        try {
            const id = await localStorage.getItem("userId");
            const response = await fetch(`${host}/profileData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            });
            const json = await response.json();
            if (json.success) {
                await setUser(json.user);
            } else {
                console.log("failed to get profile Data");
            }

        } catch (error) {
            console.log("Server Error. Faild to logged in!")
        }

    }

    const handleUpdateProfile = async ({ firstname, lastname }) => {
        try {
            const id = await localStorage.getItem("userId");
            const response = await fetch(`${host}/updateProfile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, firstname, lastname })
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

    const handleUpdatePass = async ({ oldPass, newPass }) => {
        try {
            const id = await localStorage.getItem("userId");
            const response = await fetch(`${host}/updatePass`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, oldPass, newPass })
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


    const handleRegisterClient = async ({ name, email, address, cnic, phone }) => {
        try {
            const lawyer = await localStorage.getItem("userId");
            const response = await fetch(`${host}/registerClient`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ lawyer, name, email, address, cnic, phone })
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
                handleGetClients()
            } else {
                alert(json.message)

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    };

    const handleUpdateClient = async ({id, name, email, address, phone }) => {
        try {
            const response = await fetch(`${host}/updateClient`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id,name, email, address, phone })
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
                handleGetClients()
            } else {
                alert(json.message)

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    };



    const handleGetClients = async () => {
        try {
            const lawyerId = await localStorage.getItem("userId");
            const response = await fetch(`${host}/getClients`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ lawyerId })
            });
            const json = await response.json();
            if (json.success) {
                await setClients(json.clients)
            } else {
                console.log(json.message);

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }


    const handleGetCases = async () => {
        try {
            const lawyerId = await localStorage.getItem("userId");
            const response = await fetch(`${host}/getCases`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ lawyerId })
            });
            const json = await response.json();
            if (json.success) {
                await setCases(json.cases)
            } else {
                console.log(json.message);

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }

    const handleAddRecord = async ({
        userId,
        judge,
        courtNumber,
        courtAction,
        caseTitle,
        caseStatus,
        caseType,
        totalFee,
        discount,
        paidFee,
        hearingDate }) => {
        try {
            const lawyerId = await localStorage.getItem("userId");
            const response = await fetch(`${host}/addRecord`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId,lawyerId, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, totalFee, discount, paidFee, hearingDate })
            });
            const json = await response.json();
            if (json.success) {
                console.log("add record done");
                handleGetCases()
            } else {
                console.log(json.message);

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }


    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`${host}/deleteClient`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message);
                handleGetClients();
                handleGetCases()
            } else {
                console.log(json.message);

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }

    const handleAddFee = async ({id,fee}) => {
        try {
            const response = await fetch(`${host}/addFee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id,fee,date })
            });
            const json = await response.json();
            if(json.success){
                handleGetCases()
            }
            else{
                alert(json.message)
            }
        } catch (error) {
            alert("Server Error!")
        }
    }


    return (
        <Context.Provider value={{ handleRegister, handleLogin, getProfileData, user, checkLoggedInStatus, handleLogout, handleUpdateProfile, handleUpdatePass, handleRegisterClient, handleGetClients, clients, handleAddRecord,handleGetCases,cases,handleUpdateClient,handleDeleteUser,handleAddFee,fee,feeRecieved,totalFee}}>
            {children}
        </Context.Provider>
    );
}

export { Context, States };
