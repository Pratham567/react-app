import Component2 from "./Component2";
import { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

const Component1 = () => {

    const counterState = useContext(CounterContext);
    console.log(counterState);

    // Q: Use the counter state in the component3 
    // Create a button and increment the counter state in the component3

    return (
        <>
            <section>
                <h2>This is Component 1</h2>
                <p>This is a paragraph in component 1</p>
                <h2>Counter: {counterState.counter}</h2>
            </section>
            <Component2 />
        </>
    );
}

export default Component1;