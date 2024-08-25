import { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

const Component3 = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <section>
            <h2>This is Component 3</h2>
            <p>This is a paragraph in component 3</p>
            <button onClick={() => setCounter(counter + 1) }>Increase</button>
        </section>
    );
}

export default Component3;