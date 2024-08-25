const ComponentDrill3 = ({ counter, setCounter }) => {
    return (
        <>
            <section>
                <h2>Drill3 Component</h2>
                <p>This is a paragraph in componentDrill 3</p>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <br /><br />
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            </section>
        </>
    );
}

export default ComponentDrill3;