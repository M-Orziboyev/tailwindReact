import React from 'react'
import { Navbar } from './components';
import { style } from "./util/style";

function App() {
  return (
      <div className="bg-black w-full overflow-hidden ">
        <div className={`${style.paddingX} ${style.flexStart}`}>
          <div className={`${style.container}`}>
              <Navbar />
          </div>
        </div>
      </div>
  )
}

export default App
