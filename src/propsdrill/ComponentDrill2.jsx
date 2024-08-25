import ComponentDrill3 from "./ComponentDrill3";
const ComponentDrill2 = ({ counter, setCounter }) => {
    return (
        <>
            <section>
                <h2>Drill2 Component</h2>
                <p>This is a paragraph in componentDrill 2</p>
                {/* <button onClick={() => setCounter(counter + 1)}>Increase</button> */}
                <br /><br />
                {/* <button onClick={() => setCounter(counter - 1)}>Decrease</button> */}
            </section>

            <ComponentDrill3 counter={counter} setCounter={setCounter} />
        </>
    );
}

export default ComponentDrill2;