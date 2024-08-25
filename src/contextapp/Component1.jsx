import Component2 from "./Component2";

const Component1 = () => {

    return (
        <>
            <section>
                <h2>This is Component 1</h2>
                <p>This is a paragraph in component 1</p>
                <h3>Counter: {counterState.counter}</h3>
                <button onClick={() => counterState.setCounter(counterState.counter + 1)}>Increment</button>
                <br /><br />
                <button onClick={() => counterState.setCounter(counterState.counter - 1)}>Decrement</button>
            </section>
            <Component2 />
        </>
    );
}

export default Component1;