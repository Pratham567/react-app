import Component2 from "./Component2";

const Component1 = () => {

    return (
        <>
            <section>
                <h2>This is Component 1</h2>
                <p>This is a paragraph in component 1</p>
            </section>
            <Component2 />
        </>
    );
}

export default Component1;