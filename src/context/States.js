<<<<<<< HEAD
import { createContext } from "react";
=======
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c

const Context = createContext();

const States = ({ children }) => {
<<<<<<< HEAD

    const host = "http://localhost:8002";

    const handleRegister = async ({firstname, lastname, email}) => {
=======
    const navigation = useNavigate()
    const [user, setUser] = useState([]);
    const [clients, setClients] = useState([]);
    const [filterClients, setFilterClients] = useState([])
    const [cases, setCases] = useState([]);
    const [fee, setFee] = useState(0);
    const [reminder, setReminder] = useState(false);
    const [totalFee, setTotalFee] = useState(0)
    const host = "http://localhost:8002";

    const fullDate = new Date();
    const today = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const date = `${year}-${month < 10 ? '0' + month : month}-${today}`;


    const feeRecieved = async () => {
        let amount = 0
        let totalAmount = 0
        await cases.map((item) => {
            amount = amount + item.paidFee
            const feeAfterDiscount = item.totalFee - item.discount
            totalAmount = totalAmount + feeAfterDiscount
        })
        setFee(amount);
        setTotalFee(totalAmount);
    }

    const handleRegister = async ({ firstname, lastname, email }) => {
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
        try {
            const response = await fetch(`${host}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
<<<<<<< HEAD
                body: JSON.stringify({firstname, lastname, email} )
            });
            const json = await response.json();
            if (json.success == true) {
=======
                body: JSON.stringify({ firstname, lastname, email })
            });
            const json = await response.json();
            if (json.success) {
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
                alert(json.message)
            } else {
                alert(json.message)

            }

        } catch (error) {
<<<<<<< HEAD
            alert(error.message)
        }
    }

    return (
        <Context.Provider value={{handleRegister}}>
=======
            console.log(error.message);
        }
    }


    // check user is logged in or not
    const checkLoggedInStatus = async () => {
        const user = await localStorage.getItem("userId");
        if (user) {
            navigation("/admin")
        }
    }



    const handleReminder = async () => {
        try {
            const response = await fetch(`${host}/sendReminder`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ date })
            });
            const json = await response.json();
            if (json.success) {
                setReminder(true)
            }
        } catch (error) {
            console.log(error.message);
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
            console.log(error.message);
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
            console.log(error.message);
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
            console.log(error.message);
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
            console.log(error.message);
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
            console.log(error.message);
        }
    };

    const handleUpdateClient = async ({ id, name, email, address, phone }) => {
        try {
            const response = await fetch(`${host}/updateClient`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, name, email, address, phone })
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message)
                handleGetClients()
            } else {
                alert(json.message)

            }

        } catch (error) {
            console.log(error.message);
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
                await setFilterClients(json.clients)
            } else {
                console.log(json.message);

            }

        } catch (error) {
            console.log(error.message);
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
            console.log(error.message);
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
        hearingDate,
        reminderDate }) => {
        try {
            const lawyerId = await localStorage.getItem("userId");
            const response = await fetch(`${host}/addRecord`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId, lawyerId, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, totalFee, discount, paidFee, hearingDate, reminderDate })
            });
            const json = await response.json();
            if (json.success) {
                handleGetCases()
            } else {
                console.log(json.message);

            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }

    const handleUpdateRecord = async ({
        id,
        judge,
        courtNumber,
        courtAction,
        caseTitle,
        caseStatus,
        caseType,
        hearingDate,
        reminderDate }) => {
        try {
            const response = await fetch(`${host}/updateRecord`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, hearingDate, reminderDate })
            });
            const json = await response.json();
            if (json.success) {
                handleGetCases()
            } else {
                console.log(json.message);
            }

        } catch (error) {
            alert("Server Error. Registeration failed!")
        }
    }


    const handleDeleteRecord = async (id) => {
        try {
            const response = await fetch(`${host}/deleteRecord`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            });
            const json = await response.json();
            if (json.success) {
                alert(json.message);
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

    const handleAddFee = async ({ id, fee }) => {
        try {
            const response = await fetch(`${host}/addFee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, fee })
            });
            const json = await response.json();
            if (json.success) {
                handleGetCases()
            }
            else {
                alert(json.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

        // search user function
        const searchUser = (text) => {
            if (text !== "") {
                const filtered = filterClients.filter((user) =>
                    user.cnic === text
                );
                setClients(filtered);
            }
            else (
                handleGetClients()
            )
        };


    return (
        <Context.Provider value={{ handleRegister, handleLogin, getProfileData, user, checkLoggedInStatus, handleLogout, handleUpdateProfile, handleUpdatePass, handleRegisterClient, handleGetClients, clients, handleAddRecord, handleGetCases, cases, handleUpdateClient, handleDeleteUser, handleAddFee, fee, feeRecieved, totalFee, handleReminder, reminder, handleUpdateRecord,handleDeleteRecord,searchUser }}>
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
            {children}
        </Context.Provider>
    );
}

export { Context, States };
