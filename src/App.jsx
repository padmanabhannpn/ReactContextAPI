import React, { useState } from 'react';
import MyContext from './MyContext';
function App() {
const [value, setValue] = useState('Hello, World!');

return (
<MyContext.Provider value={value}>

<>
<div><p>First Class</p></div>
<ChildComponent />
</>
</MyContext.Provider>
);
}

// Class Two
function ChildComponent() {
return (
  <>
  <div><p>Second Class</p></div>
  <ChildOneComponent />
  </>
);
}

// Class Three
function ChildOneComponent() {
return (
  <>
  <div><p>Third Class</p></div>
  <ChildTwoComponent />
  </>
);

}

//Class Four
function ChildTwoComponent() {
const value = React.useContext(MyContext);
return (
<>
<div><p>Fourth Class</p></div>
<div>{value}</div>;
</>
)


}


export default App;