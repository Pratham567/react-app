const Blogs = ({ blogs, title }) => {

    return (
        <section>
            <h1>{title}</h1>
            {blogs.map(blog => {
                return (
                    <div>
                        <h4>{blog.title}</h4>
                        <em>Written by: {blog.author}</em>
                        <p>{blog.content}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default Blogs;
