import Component1 from "./Component1";
import Component99 from "./Component99";
// import { CounterContextProvider } from "./contexts/CounterContext";


// 1. Create a CounterContext template in the contexts folder
// 2. using createContext hook: initialize CounterContext with null
// 3. Create a CounterContextProvider template function which takes in props
// 4. Initialize a state variable counter with useState hook
// 5. return the jsx template with CounterContext.Provider applied to the children
// 5.1 Pass some states with value attribute to the CounterContext.Provider
// 6. export CounterContext and CounterContextProvider


// 1. Import CounterContextProvider in the parent component
// 2. Wrap the child component with CounterContextProvider where the context is needed


// In the child component, 
// 1. import the CounterContext
// 2. import useContext hook from react
// 3. apply the context by calling useContext(CounterContext)
// 3.1 This returns states as an object wrapper
// 4. destructure the states from the object
// 5. use the states in the component
// 6. For the counter state, create a button to increment and decrement the counter
// Q: Apply this context to the Component1 and Component2 and Component3
// Q: What if I want to apply context to only Component3 ??
// Q: What happens when I apply the context to the Component99 ??

const ContextApp = () => {
    return (
        <>
            <section>
                <h1>Let's learn Context API</h1>
                <p>This is a paragraph in context app</p>
            </section>
        </>
    );
}

export default ContextApp;