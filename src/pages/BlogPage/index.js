import react from "../../img/react-brands.svg"
import nodejs from "../../img/node-js-brands.svg"
import user from "../../img/user-circle-solid.svg"

const BlogPage = () => {
  return (
    <section className='blogpage' id='blog'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Blog
        </h2>
        <article className='blog-articles'>
          {/* Single Article */}
          <div className='single-article'>
            <div className='article-title'>
              <img src={react} alt='' />
              <h4>The Fastest Way to Learn React</h4>
            </div>
            <div className='article-text'>
              <p>
                This blog post is about achieving the fastest way to learn
                React.
              </p>
            </div>
          </div>
          {/* End of single article */}

          {/* Single Article */}
          <div className='single-article'>
            <div className='article-title'>
              <img src={nodejs} alt='' />
              <h4>How to Build a Node Server in 10 Minutes</h4>
            </div>
            <div className='article-text'>
              <p>I wrote about building a Node.js server, pain free!</p>
            </div>
          </div>
          {/* End of single article */}

          {/* Single Article */}
          <div className='single-article'>
            <div className='article-title'>
              <img src={user} alt='' />
              <h4>My Thoughts on Resumes</h4>
            </div>
            <div className='article-text'>
              <p>
                Why good resumes are hard to write, and essential to a great
                career
              </p>
            </div>
          </div>
          {/* End of single article */}
        </article>
        <a href='http://goncuk.com/' target='_blank' rel='noopener noreferrer'>
          <button className='btn btn-blog'>View all posts</button>
        </a>
      </div>
    </section>
  );
};

export default BlogPage;
