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
  const [user, setUser] = useState(null)
  const incrementSectionNo = () => {
    setSectionNo(prevSectionNo => prevSectionNo + 1)
  }
  const makeRequest = (endpoint, ...data) => {
    console.log(`Making request to ${endpoint}`)
    console.log(data)
    // return fetch(endpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
  }
  return (
    <div>
      {sectionNo === 0 && <Login goNextSection={incrementSectionNo} setUser={setUser} makeRequest={makeRequest}/>}
      {sectionNo === 1 && <Questionnaire goNextSection={incrementSectionNo} user={user} makeRequest={makeRequest}/>}
      {sectionNo === 2 && <Instructions goNextSection={incrementSectionNo} user={user} makeRequest={makeRequest}/>}
      {sectionNo === 3 && <Test1 goNextSection={incrementSectionNo} user={user} makeRequest={makeRequest}/>} {/* .tie5Roanl */}
      {sectionNo === 4 && <Test2 goNextSection={incrementSectionNo} user={user} makeRequest={makeRequest}/>} {/* Quotes */}
      {sectionNo === 5 && <Test3 goNextSection={incrementSectionNo} user={user} makeRequest={makeRequest}/>} {/* Rhythm */}
    </div>
  );
};

export default App;
