import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Login_form_comp from "./components/login/login_form.jsx"
import Header_c from "./components/header/header_c.jsx"
import Footer_c from "./components/footer/footer_c.jsx"
import Index from "./components/index.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header_c></Header_c>
      <div>
      <Login_form_comp/>
      </div>
      <div>
        <Index/>
      </div>
      <Footer_c/>
    </>
  )
}

export default App
