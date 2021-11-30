import React, { useRef } from 'react';
import Header from './components/Header'
import {Main} from './components/Main';
import ReactToPrint from 'react-to-print';



function App() {
  const componentRef = useRef();
  return (
    <div className="App">
        <Header />
        <Main ref={componentRef}/>
        <ReactToPrint 
          trigger={() =>
            <div className="print"> 
            <button className="add-btn pdf">Print</button>
            </div>}
          content={() => componentRef.current}
        />
    </div>
  )
}

export default App;
