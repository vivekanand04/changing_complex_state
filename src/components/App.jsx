//question :write two method thats why whatever u r writing in placeholser should be print in front of hello
//method 1: sirf isi file me change hua hai
// import React, { useState } from "react";
// function App() {
// const[fullName,updateName]=useState({
//   fName:"",
//   lName:""

// });
// function handleChange(event){
//   const newValue=event.target.value;
//   const inputName=event.target.name;
//   // console.log(newValue);
//   // if(inputName==="fName"){
//   // updateName({fName:newValue});
//   // }
//   // else if(inputName==="lName"){
//   //   updateName({lName:newValue});
//   // }
//   updateName(preval=>{
//     if(inputName==="fName"){
//       return {
//         fName:newValue,
//         lName:preval.lName
//       };
//     }
//     else if(inputName==="lName"){
//       return {
//         fName:preval.fName,
//         lName:newValue

//       }
//     }
//   })
// }

//   return (
//     <div className="container">
//       <h1>Hello{fullName.fName}{fullName.lName}</h1>
//       <form>
//         <input name="fName" onChange={handleChange}placeholder="First Name" value={fullName.fName} />
//         <input name="lName"onChange={handleChange} placeholder="Last Name" value={fullName.lName}  />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//method2: sirf isi file me change hua hai
import React, { useState } from "react";
function App() {
  const [fullName, updateName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;
    // console.log(newValue);
    // if(inputName==="fName"){
    // updateName({fName:newValue});
    // }
    // else if(inputName==="lName"){
    //   updateName({lName:newValue});
    // }
    updateName((preval) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preval.lName
        };
      } else if (name === "lName") {
        return {
          fName: preval.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello{fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
