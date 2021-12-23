import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '../layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
