import './App.css'
import Footer from './layouts/admin/components/Footer'
import Header from './layouts/admin/components/Header'
import Navbar from './layouts/admin/components/Navbar'
//  import Navbar from './layouts/manager/Navbar'
import RouterCom from './routers/route'

function App() {
<<<<<<< HEAD
  const location = useLocation();
  const isLoginPage = location.pathname === '/dang-nhap';
=======
>>>>>>> de93bc1023bd2ab81606c2c8c52f2f1ab620dc93

  return (
    <>
      <Header />
      <Navbar />
      <RouterCom />
      {/* <Footer /> */}
    </>
  )
}

export default App