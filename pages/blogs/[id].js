// pages/blogs/[id].js
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import { Divider } from 'antd';

async function submitComment(comments) {
  const response = await fetch("/api/comments/",{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(comments)
  })
  const data = await response.json()
}

async function getComment(blogId) {
  console.log('30  get comment');
  const response = await fetch(`/api/comments/${blogId}`,{
    method: "GET"
  })
  const data = await response.json()
  return data.json;
}


export default function Blog({ blog, photo, comments }) {
  const router = useRouter()
  const [validated, setValidated] = useState(false);
  const [allComments, setAllComments] = useState(comments);
  
  // console.log(comments);
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running'
  
  async function handleSubmit(event){
    const form = event.currentTarget;
    var target = event.target
    event.preventDefault();
    if (form.checkValidity() !== false) {
      // this is the value
      console.log(target.comment.value);

      await submitComment({
        comments: target.comment.value,
        blog_id: blog.id
      }).then(
        async ()=>{
          await getComment(blog.id).then(
            (value) => {
              setAllComments(value)
              target.comment.value = null
            }
          )
        }
      );
    }
    setValidated(true);
  };

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{blog.name}</title>
        <meta name="description" content={blog.body} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row> 
          <h1>
            { blog.blog_title }
          </h1>
        </Row>
        <Divider />
        <h6>
          reported on { blog.date_added }
        </h6>
        <Divider />
        <Row>
          <Col sm={4}>
            <Card key = {blog.id} style={{ width: '18rem' }}>
              <Image
                // pull the local photos
                src={'http://localhost:8000'+blog.blog_pic}
                // src={blog.blog_pic.substring(7)}
                alt="Picture of the author"
                width={600} // automatically provided
                height={600} // automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                priority
              /> 
              {/* <Card.Img variant="top" src={"http://localhost:8000"+blog.blog_pic} /> */}
              <Card.Text>
                {blog.body}
              </Card.Text>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Link href="/blogs/"><Button variant="primary">Back to Posts</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
          <ListGroup as="ol" numbered>
            {allComments.map((comment, i) => (
              <ListGroup.Item as="li" key={i}> {comment.comments}</ListGroup.Item>
            ))}
          </ListGroup>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="comment">
              <Form.Label>Add a new Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Container> 
            <Row>
              <Col className="text-center">
                <Button type="submit">Submit form</Button>                
              </Col>
            </Row>
          </Container>
          </Form>
          
          
          </Col>
        </Row>
      </Container>
    </>

  )

}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get blogs
  const res = await fetch('http://localhost:8000/api/blogs')
  const blogs = await res.json()
  // Get the paths we want to pre-render based on blogs
  const paths = blogs.map(({id}) => ({
    params: { id: id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { 
    paths,
    fallback: false, 
  }
}

export async function getStaticProps({ params }) {
  // const id = context.params.id;
  // params contains the blog `id`.
  // If the route is like /blogs/1, then params.id is 1
  const res_blog = await fetch(`http://localhost:8000/api/blog/${params.id}`)
  const blog = await res_blog.json()
  const res_comments = await fetch(`http://localhost:8000/api/comment/?blog_id=${params.id}`)
  const comments = await res_comments.json()
  // console.log('190', res_comments.response);

  // Pass blog data to the page via props
  return { props: { 
      blog, 
      // if the name are equal, it can be ignored just like the above line
      // or it can be written as below
      comments: comments
    },
    revalidate: 10
  }
}
