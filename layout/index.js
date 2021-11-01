
import Nav from 'react-bootstrap/Nav'
import Header from '../components/header';
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}