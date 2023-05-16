
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  return (
    <>
      {/*navbar */}
      <Navbar />
      {/*main -> content -> aside */}
      <Main />
      {/*footer */}
      <Footer />
    </>
  )
}

export default App
