import { createContext, useState } from "react";

const CounterContext = createContext(null);

const CCP = (props) => {
    const [counter, setCounter] = useState(0);
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {props.children}
        </CounterContext.Provider>
    );
}

export { CounterContext, CCP };






