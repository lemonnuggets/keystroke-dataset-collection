import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import Questionnaire from './components/Questionnaire/Questionnaire'
import Instructions from './components/Instructions/Instructions'
import Test1 from './components/Test1/Test1'
import Test2 from './components/Test2/Test2'
import Test3 from './components/Test3/Test3'

const App = () => {
  const [sectionNo, setSectionNo] = useState(0)
  const incrementSectionNo = () => {
    setSectionNo(prevSectionNo => prevSectionNo + 1)
  }
  return (
    <div>
      {sectionNo === 0 && <Login incrementSectionNo={incrementSectionNo} />}
      {sectionNo === 1 && <Instructions incrementSectionNo={incrementSectionNo} />}
      {sectionNo === 2 && <Questionnaire incrementSectionNo={incrementSectionNo} />}
      {sectionNo === 3 && <Test1 incrementSectionNo={incrementSectionNo} />}
      {sectionNo === 4 && <Test2 incrementSectionNo={incrementSectionNo} />}
      {sectionNo === 5 && <Test3 incrementSectionNo={incrementSectionNo} />}
    </div>
  );
};

export default App;
