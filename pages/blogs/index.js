import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function Blogs({blogs}) {
  // console.log(blogs);
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
      </Container>
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
