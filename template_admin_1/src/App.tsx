import './App.css'
import Footer from './layouts/admin/components/Footer'
import Header from './layouts/admin/components/Header'
 import Navbar from './layouts/admin/components/Navbar'
// import Navbar from './layouts/staff/Navbar'

// import Navbar from './layouts/manager/Navbar'

import RouterCom from './routers/route'

function App() {

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
