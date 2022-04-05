import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>

            <h1>1. what is context api?</h1>

            <p>Ans:


                context api in which way to we can create global variables that can be passed on the component tree.
                context api is primarily used when some data needs to be accessible.
                Actually context api is  a react structure.
                context api helps to exchange details and assist in solving prop-drilling.
                As an example of context api is authenticated user.</p>

            <h1>2. What are semantic tags in HTML?</h1>

            <p> Semantic tags are readable in which human and machine can read to describe its meaning.
                Semantic tags are purpose based,its name fully describe its work.
                As an example of semantic tags are header,footer fully describe its work what will this tag do.
                Another thing is div and span are not semantic tags because they dont describe its work,they are called
                non-semantic tag.
                Again table,article are semantic tag bacause they describe its content.
                

            </p>

        </div>
    );
};

export default Blog;