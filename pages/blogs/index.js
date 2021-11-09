import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
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
          // console.log('31  success\n',res.data);
          return res.data;
      }
  } catch(err) {
    // console.log('\n',err);
    // console.log('34  failed\n');
    return err
  }
}

export default function Blogs({blogs}) {
  // console.log(blogs);
  const [newBlog, setNewBlog] = useState(false);
  

  async function onSubmit(e){
    e.preventDefault();
    // console.log(e);
    // setNewBlog(false)
    // const pic = await convertToBase64(e.target.blog_pic.files[0]);
    let reader = new FileReader();
    
    await submitBlog({
      blog_title: e.target.blog_title.value,
      blog_body: e.target.blog_body.value,
      blog_pic: e.target.blog_pic.files[0]
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Fetch all Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          {blogs.map((blog, i) => (
            <Col xs={3} key={i}>
              <Card key = {blog.id} style={{ width: '18rem' }}>
                <Image
                  src={blog.url}
                  alt="Picture of the author"
                  width={600} // automatically provided
                  height={600} // automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                /> 
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Link href={"/blogs/"+blog.id}><Button variant="primary">Details</Button></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button onClick = {()=>{
              setNewBlog(!newBlog)
              console.log('48  :  ', newBlog);
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
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
  const blogs = await res.json()
  // By returning { props: { blogs } }, the Blog component
  // will receive `blogs` as a prop at build time
  return {
    props: {
      blogs,
    },
  }
}
