import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {

    const { id } = useParams();

    // 1. use useParams() to extract the id from the URL
    // 2. display the id in the h2 tag
    // 3. Create the API endpoint to fetch the blog with the id using customHook useFetch
    // 4. Fetch the blog data using custom hook useFetch
    // 5. Display the blog data in the BlogDetail component

    const url = "http://localhost:3099/blogs/" + id;
    const { data, loading, error } = useFetch(url);

    return (
        <section>
            {loading && <p>The page is loading</p>}
            {error && <p>{error.message}</p>}
            {data && <div>
                <h4>{data.title}</h4>
                <em>Written by: {data.author}</em>
                <p>{data.content}</p>
            </div>}
        </section>
    );
}

export default BlogDetail;