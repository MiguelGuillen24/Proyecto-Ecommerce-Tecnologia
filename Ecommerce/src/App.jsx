import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Login_form_comp from "./components/login/login_form.jsx"
import Header_c from "./components/header/header_c.jsx"
import Footer_c from "./components/footer/footer_c.jsx"
import Pdf from "./components/PDF/pdf.jsx"
import {PDFDownloadLink} from '@react-pdf/renderer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header_c/>
      <div>
      <Login_form_comp/>
      </div>
      <div>
        <PDFDownloadLink document={<Pdf/>} fileName='myfirstpdf.pdf'>
          {
            (loading, url, error) => loading ? <button>
              Loading Document ...
            </button> : <button>
              Download now!
            </button>
          }
        </PDFDownloadLink>
      </div>
      <Footer_c/>
    </>
  )
}

export default App
