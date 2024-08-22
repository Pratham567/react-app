import { useState, useEffect } from "react";
import Blogs from "./Blogs";

const AllBlogs = () => {

    console.log('MyComponent rendered');
    const url = "http://localhost:3099/blogs";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 1. create a custom hook useFetch, such that we can reuse it later for calling different APIs
    // 2. useFetch() will take the url as an argument
    // 3. useFetch() will return data, loading, and error
    // 4. setup the cleanup function for useFetch() to abort the fetch request
    // 5. setup the abortController to abort the fetch request
    // 6. Handle the AbortError in the catch block

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    console.log("fetch is successful");
                    // console.log(res);
                    if (res.ok) {
                        // fetch is success, and res is fetched
                        return res.json();
                    }
                    else {
                        // fetch is success but data is not fetched
                        throw Error("Data is not fetched from the API");
                    }
                })
                .then((data) => {
                    console.log("json parsing is successful");
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err);
                    console.log("fetch is failed: catch block executed");
                })
        }, 2000);
    }, [url]);

    return (
        <div>
            {loading && <section>The page is loading</section>}
            {error && <section>{error.message}</section>}
            {data && <Blogs blogs={data} title={"Blogs from AllBlogs (via fetch api)"} />}
        </div>
    );
}

export default AllBlogs;















/*

const { data: blogs, loading, error } = useFetch(url);

*/