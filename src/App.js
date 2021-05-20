import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { auth } from './services/firebase';

function App() {
  const [user]=useState(auth.currentUser)

  return (
    <div>
    <Header user={user} />
    <main>
      <Home/>
    </main>
    </div>
  )
}

export default App;
