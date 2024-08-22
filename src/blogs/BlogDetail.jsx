import {useParams} from 'react-router-dom';

const BlogDetail = () => {

    const { id } = useParams();

    // 1. use useParams() to extract the id from the URL
    // 2. display the id in the h2 tag
    // 3. Create the API endpoint to fetch the blog with the id using customHook useFetch
    // 4. Fetch the blog data using custom hook useFetch
    // 5. Display the blog data in the BlogDetail component

    return (
        <section>
            <h2>
                Blog Detail Page with id
            </h2>
        </section>
      );
}
 
export default BlogDetail;