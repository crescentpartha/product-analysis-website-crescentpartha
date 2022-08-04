import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20'>
            <h2 className='text-2xl font-semibold my-10'>Welcome to my Blogs</h2>
            <div className='shadow-xl m-10 p-10 rounded-lg'>
                <div className='text-justify shadow-lg p-5 rounded-lg'>
                    <h2 className='font-semibold text-rose-500 text-lg'>⫸ What is Context API? What is the purpose of Context API?</h2>
                    <p className='text-md '><span className='text-rose-600'>Answer: </span>The Context API is a React structure that enables you to exchange unique details and assists in <span className='font-medium'>solving prop-drilling</span> from all levels of your application.</p>
                    <ul>
                        <p className='font-semibold'>⚜ Uses of Context API:</p>
                        <div className='ml-10'>
                            <li>→ One information, we can share with multiple children component.</li>
                            <li>→ Context API is used to <span className='font-medium'>avoid Prop Drilling</span>.</li>
                            <li>→ <span className='font-medium'>State</span> Management</li>
                            <li>→ <span className='font-medium'>Theme uses purpose</span> (dark theme, light theme)</li>
                            <li>→ <span className='font-medium'>Website Translate</span> (English to Bengali)</li>
                        </div>
                    </ul>
                </div>
                <div className='text-justify my-10 shadow-lg p-5 rounded-lg'>
                    <h2 className='font-semibold text-rose-500 text-lg'>⫸ What is Semantic Tag?</h2>
                    <p className='text-md '><span className='text-rose-600'>Answer: </span>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                    <ul>
                        <p className='font-semibold'>⚜ Advantages of Semantic Tag:</p>
                        <div className='ml-10'>
                            <li>→ It makes web pages more <span className='font-medium'>informative and adaptable</span>, allowing browsers and search engines to <span className='font-medium'>better interpret content</span>.</li>
                            <li>→ Semantics is concerned with <span className='font-medium'>meaning</span>.</li>
                            <li>→ The pages made with semantic elements are much <span className='font-medium'>easier to read</span>.</li>
                            <li>→ It offers a <span className='font-medium'>better user experience</span>.</li>
                            <li>→ Screen readers and browsers can interpret Semantic HTML better, which makes it <span className='font-medium'>more accessible</span>.</li>
                            <li>→ Some Example of Semantic Tags are <span className='font-medium'>article, aside, details, figcaption, figure, footer, header, main, nav, section</span> etc.</li>
                        </div>
                    </ul>
                </div>
                <div className='text-justify my-10 shadow-lg p-5 rounded-lg'>
                    <h2 className='font-semibold text-rose-500 text-lg'>⫸ Difference among inline, block, inline-block elements?</h2>
                    <p className='text-md '><span className='text-rose-600'>Answer: </span></p>
                    <ul>
                        <p className='font-semibold'>⚜ Properties of inline elements:</p>
                        <div className='ml-10'>
                            <li>→ Inline elements don't start in a new line.</li>
                            <li>→ Inline elements Examples: <span className='font-medium'>links, strong, span, img</span> etc.</li>
                        </div>
                    </ul>
                    <ul>
                        <p className='font-semibold'>⚜ Properties of block elements:</p>
                        <div className='ml-10'>
                            <li>→ Block elements always start in a line.</li>
                            <li>→ Block elements examples: <span className='font-medium'>paragraphs, headings, lists and list items, div, header, footer, main, section</span> etc.</li>
                        </div>
                    </ul>
                    <ul>
                        <p className='font-semibold'>⚜ Properties of inline-block elements:</p>
                        <div className='ml-10'>
                            <li>→ inline-block allows to set a <span className='font-medium'>width and height</span> on the element.</li>
                            <li>→ Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;