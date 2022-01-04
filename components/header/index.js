import styles from './index.module.css'
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  // console.log(posts);
  return (
    <div
    // style={{
    //   display:"flex"
    // }}
    className="grid justify-items-stretch grid-cols-3"
    >
      <Nav defaultActiveKey="/home" className='justify-self-start content-center'>
        <Nav.Item>
          <Link href="https://www.instagram.com/luxedujour/">
            <a className="nav-link" title="Luxe Du Jour on Instagram">
              <svg viewBox="0 0 512 512" 
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  fill: "#14a3c1"
                }}
              >
                <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z">
                </path>
                <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z">
                </path>
              </svg>
            </a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://www.pinterest.ca/shopluxedujour/_saved/">
            <a className="nav-link" title="Luxe Du Jour on Pinterest">
              <svg viewBox="0 0 20 20" 
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  fill: "#14a3c1"
                }}
              >
                <path d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z">
                </path>
              </svg>
            </a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://www.facebook.com/LUXEDUJOUR">
            <a className="nav-link" title="Luxe Du Jour on Facebook">
              <svg viewBox="0 0 20 20" 
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  fill: "#14a3c1"
                }}
              >
                <path d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z">
                </path>
              </svg>
            </a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://twitter.com/Luxe_dujour">
            <a className="nav-link" title="Luxe Du Jour on Twitter">
              <svg viewBox="0 0 20 20" 
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  fill: "#14a3c1"
                }}
              >
                <path d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z">
                </path>
              </svg>
            </a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://www.youtube.com/channel/UCxbk9MfdDpnEBzIdr4vBtTA">
            <a className="nav-link" title="Luxe Du Jour on YouTube">
              <svg viewBox="0 0 20 20" 
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  verticalAlign: "middle",
                  fill: "#14a3c1"
                }}
              >
                <path d="M-.196 15.803q0 1.23.812 2.092t1.977.861h14.946q1.165 0 1.977-.861t.812-2.092V3.909q0-1.23-.82-2.116T17.539.907H2.593q-1.148 0-1.969.886t-.82 2.116v11.894zm7.465-2.149V6.058q0-.115.066-.18.049-.016.082-.016l.082.016 7.153 3.806q.066.066.066.164 0 .066-.066.131l-7.153 3.806q-.033.033-.066.033-.066 0-.098-.033-.066-.066-.066-.131z">
                </path>
              </svg>
            </a>
          </Link>
        </Nav.Item>
      </Nav>
      <Link href="/blogs/">
        <a className="nav-link justify-self-center" title="Blog">
          <Image
            // pull the local photos
            src='/logo.png'
            // src={blog.blog_pic.substring(7)}
            alt="Picture of the author"
            width={100} // automatically provided
            height={100} // automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            priority
          /> 
        </a>
      </Link>
      <div className="flex items-center justify-self-end">
        <Link href="https://www.youtube.com/channel/UCxbk9MfdDpnEBzIdr4vBtTA">
          <a className="nav-link" title="Luxe Du Jour on YouTube">
            <svg viewBox="0 0 20 20" 
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                verticalAlign: "middle",
                fill: "#14a3c1"
              }}
            >
              <path d="M-.196 15.803q0 1.23.812 2.092t1.977.861h14.946q1.165 0 1.977-.861t.812-2.092V3.909q0-1.23-.82-2.116T17.539.907H2.593q-1.148 0-1.969.886t-.82 2.116v11.894zm7.465-2.149V6.058q0-.115.066-.18.049-.016.082-.016l.082.016 7.153 3.806q.066.066.066.164 0 .066-.066.131l-7.153 3.806q-.033.033-.066.033-.066 0-.098-.033-.066-.066-.066-.131z">
              </path>
            </svg>
          </a>
        </Link>
      </div>
      
    </div>
    
  )
}