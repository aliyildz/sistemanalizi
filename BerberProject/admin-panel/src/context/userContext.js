import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "");
    const [session, setSession] = useState("");
    const [client, setClient] = useState("");
    const [game, setGame] = useState("");

    const data = {
        user,
        setUser,
        setSession,
        session,
        setClient,
        client,
        setGame,
        game
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useUser = () => useContext(Context);

export default Provider;
