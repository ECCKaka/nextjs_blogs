
import Nav from 'react-bootstrap/Nav'


export default function Header() {
  // console.log(posts);
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}