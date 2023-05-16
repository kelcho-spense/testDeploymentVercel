import './main.css'

function Main() {
    const blogs = [
        {

            "title": 'Blog Title',
            "content": 'this ia a blog content'
        }, {


            "title": 'Blog Title',
            "content": 'this ia a blog content'
        }

    ]



    return (
        <div className='main'>
            <div className="main-content">
                {
                    blogs.map((blog, index) => {
                        return (
                            <div className="blog" key={index}>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className="main-aside">
                aside
            </div>
        </div>
    )
}

export default Main