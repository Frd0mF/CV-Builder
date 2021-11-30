import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {Main} from './Main'

export default function PrintComponent() {
  const componentRef = useRef();
  const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Main ref={componentRef} />
    <button onClick={handleToPrint}>Print!</button>
    </div>
  );
}
