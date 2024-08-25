import ComponentDrill1 from "./ComponentDrill1";
import { useState } from "react";

// 1. Render a ComponentDrill1 component and pass counter and setCounter as props
// 2. Inside the ComponentDrill1 component, render ComponentDrill2 and pass counter and setCounter as props
// 3. Inside the ComponentDrill2 component, render ComponentDrill3 and pass counter and setCounter as props
// 4. Inside the ComponentDrill3 component, render a button that increases and decreases the counter when clicked
// 5. Create button for increment and decrement the counter in the ComponentDrill1, ComponentDrill2 and ComponentDrill3
// 6. Add component99 as a child to the ComponentDrill1 and render it
// 7. props.children ???

const PropsDrillApp = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <section>
                <h1>Let's learn !!</h1>
                <p>This is a paragraph</p>
                <p>Counter: {counter}</p>
            </section>
            <ComponentDrill1 counter={counter} setCounter={setCounter} />

        </>
    );
}

export default PropsDrillApp;