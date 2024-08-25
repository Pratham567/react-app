const SimpleWrapper = (props) => {
    console.log("Simple wrapper", props)
    return (
        <section>
            {props.children}
        </section>
    );
}

export default SimpleWrapper;