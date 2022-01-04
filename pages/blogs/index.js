import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import { useState } from 'react';
import NewBlog from '../../components/new_blog'
import axios from 'axios';

async function submitBlog(blog) {
  const body = new FormData();
  body.append('blog_pic', blog.blog_pic);
  body.append('blog_body', blog.blog_body);
  body.append('blog_title', blog.blog_title);
  
  const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    }
  }; 
  try {
      const res = await axios.post('http://localhost:8000/api/blogs/', body, config);
      if (res.status === 201) {
          return ({
            "res": res.data
          });
      }
  } catch(err) {
    // console.log('\n',err);
    // console.log('34  failed\n');
    return ({
      "error": err
    })
  }
}


// async function submitBlogTest(blog_pic) {
//   console.log('16   ',blog_pic);
//   const body = new FormData();
//   body.append('blog_pic', blog_pic.blog_pic);
//   const response = await fetch("/api/blogs/",{
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
//     body
//   })
//   const data = await response.json()
//   console.log( '25   ', data );
// }

export default function Blogs(props) {
  // console.log(blogs);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState(false);
  const showError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // <ToastContainer />
  }

  useEffect(() => {
    setBlogs(props.blogs)

  }, [props.blogs])

  useEffect(() => {
    console.log(blogs);

  }, [blogs])
  
  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      // <ToastContainer />
  }

  async function onSubmit(e){
    e.preventDefault();
    
    const new_blog_res = await submitBlog({
      blog_title: e.target.blog_title.value,
      blog_body: e.target.blog_body.value,
      blog_pic: e.target.blog_pic.files[0]
    })
    const data = await new_blog_res
    setNewBlog(!newBlog)
    if (data.res){
      showSuccess('success')
      console.log("data.res:    ",  data.res);
      setBlogs([...blogs, data.res])
      return data.res
    }
    else{
      showError('failed')
      return data.error
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Fetch all Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-3 gap-4' >
        {blogs.map((blog, i) => (
          <Card key = {blog.id}>
            <Image
              src={'http://localhost:8000'+blog.blog_pic}
              alt="Picture of the author"
              width={600} // automatically provided
              height={250} // automatically provided
              layout="responsive"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <Card.Body>
              <Card.Title>{blog.blog_title}</Card.Title>
              <Card.Text>
                {
                  blog.blog_body.length>170 ? 
                  blog.blog_body.substring(0,170) + "..." :
                  blog.blog_body
                }
              </Card.Text>
              <Link href={"/blogs/"+blog.id}><Button variant="primary">Read more →</Button></Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Container>
        <Row>
          
        </Row>

        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button onClick = {()=>{
              setNewBlog(!newBlog)
            }}>
              New Blog
            </Button>
          </Col>
        </Row>
      </Container>
      {
        newBlog && 
        <NewBlog
          show={newBlog}
          onHide={()=>setNewBlog(false)}
          onSubmit = {onSubmit}
        />
      }
    </div>
  )
}



export async function getStaticProps() {
  // Call an external API endpoint to get blogs.
  // You can use any data fetching library
  const res = await fetch('http://localhost:8000/api/blogs')
  const blogs = await res.json()
  // console.log(blogs);
  // By returning { props: { blogs } }, the Blog component
  // will receive `blogs` as a prop at build time
  return {
    props: {
      blogs,
    },
  }
}
