import { createContext } from "react";

const Context = createContext();

const States = ({ children }) => {

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
            if (json.success == true) {
                alert(json.message)
            } else {
                alert(json.message)

            }

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Context.Provider value={{handleRegister}}>
            {children}
        </Context.Provider>
    );
}

export { Context, States };
