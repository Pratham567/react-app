import ComponentDrill2 from "./ComponentDrill2";

const ComponentDrill1 = (props) => {
    console.log("props in D1", props);
    const { counter, setCounter } = props;
    return (
        <>
            <section>
                <h2>Drill1 Component</h2>
                <p>This is a paragraph in componentDrill 1</p>
                <p>Counter: {counter}</p>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <br /><br />
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>

            </section>
            <ComponentDrill2 counter={counter} setCounter={setCounter}/>
            {props.children}
        </>
    );
}

export default ComponentDrill1;