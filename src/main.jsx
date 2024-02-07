import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Card name='Vicky' status={false} place='Chennai' titel='Machine Learning Eng' but1='Message' Follow={false} skills='Skills' skillslist={['HTML','CSS','PYTHON','MYSQL','JAVA' ]} img="image/profile.png" />
    <Card name='Mohan' status={true} place='Chennai' titel='Machine Learning Eng' but1='Message' Follow={false} skills='Skills' skillslist={['HTML','CSS','PYTHON','MYSQL','JAVA' ]} img="image/profile.png" />
    <Card name='Raja' status={false} place='Chennai' titel='Machine Learning Eng' but1='Message' Follow={true} skills='Skills' skillslist={['HTML','CSS','PYTHON','MYSQL','JAVA' ]} img="image/profile.png" />
  </React.StrictMode>,
)
