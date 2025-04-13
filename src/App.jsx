

import { Grid } from '@mui/material'
import './App.css'
import ContactForm from './components/contactForm'
import ContactList from './components/contactList'

function App() {

  return (
    <div className='container'>

      <h1>
        <span className="word-big">Let&apos;s</span>{' '}
        <span className="word">keep in touch!</span>
      </h1>

      <div className='grid-box'>

        <div className='contact-list' style={{padding:0}}>
          <ContactList/>
        </div>

        <div style={{padding:0}}>
          <ContactForm/>
        </div>

      </div>
    </div>
  )
}

export default App
