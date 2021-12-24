import styles from './index.module.css'
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  // console.log(posts);
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link href="/blogs/">
          <a className="nav-link">Blogs</a>
        </Link>
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