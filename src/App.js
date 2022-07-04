import { useState, useEffect } from "react";
import Form from "./components/Form";
import Submit from "./components/Submit";
import axios from "axios";
import Records from "./components/Records";
import Edit from "./components/Edit";

function App() {
  const [department, setDepartment] = useState({});
  const [designation, setDesignation] = useState({});
  const [stateValue, setStateValue] = useState({});
  const [districtValue, setDistValue] = useState({});

  const [name ,setName] = useState("");
  const [dob,setDob] = useState([]);
  const [organisation,setOrganisation]=useState([]);
  const [doj,setDoj] = useState([]);

  const [dbData, setDbData] = useState([]);

  const [clearStates, setClearStates] = useState(false);

  const [finalData, setFinalData] = useState({
    department: [],
    designation: [],
    stateValue: [],
    districtValue: [],
    name:[],
    dob:[],
    organisation:[],
    doj:[]
  });

  // create new state for receiving data from GET request
  // run GET request in separate useEffect()
  // when data, set state with GET data

  // useEffect(() => {
  //   getToDB()
  //     .then((data) => {
  //       console.log(data);
  //       setDbData(data);
  //     })
  //     .catch(console.error);
  // }, []);

  //clearForm

  const clearForm = () => {
    setClearStates(true);
  };

  useEffect(() => {
    setFinalData({
      ...finalData,
      department,
      designation,
      stateValue,
      districtValue,
      name,
      dob,
      organisation,
      doj
    });
  }, [department, designation, stateValue, districtValue,name,dob,organisation,doj]);

  const handleDepartment = (selected) => {
    // console.log(selected);
    setDepartment({ department: selected });
  };
  const handleDesignation = (selected) => {
    // console.log(selected);
    setDesignation({ designation: selected });
  };

  const handleState = (selectedState) => {
    // console.log(selectedState);
    setStateValue({ States: selectedState });
  };
  const handleDistrict = (districtValue) => {
    // console.log(districtValue);
    setDistValue({ districts: districtValue });
  };

  const handleName =(n)=>{
    // console.log(n);
    setName({name:n})
  }
  const handleDob =(Dob)=>{
    // console.log(Dob);
    setDob({dob:Dob})
  }

  const handleOrga =(org)=>{
    // console.log(org);
    setOrganisation({organisation:org})
  }

  const handleDoj =(doj)=>{
    // console.log(doj);
    setDoj({doj:doj})
  }



  const getData = () => {
    axios.get("http://localhost:5000/data").then((res) => {
      setDbData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getToDB = async (id) => {
    return await axios.get(`http://localhost:5000/data${id}`);
    // setDbData(res.data);
  };
  // console.log(dbData);

  const postToDB = async () => {
    axios.get("http://localhost:5000/data").then((res) => {
      setDbData(res.data);
    });

    // console.log(finalData);
    if (!finalData.department) return;

    let postDb = await axios.post("http://localhost:5000/data", {
      ...finalData,
      id: "IC" + Math.trunc(Math.random() * 99),
    });

    getData();

    // console.log(postDb.data);
  };

  const [delId, setDelId] = useState("");
  const [idsToDelete, setIdsToDelete] = useState([]);

  const deleteData = async (id) => {
    // loop through idsToDelete array and make axios calls on each one of the id in the array

    let del = await axios.delete(`http://localhost:5000/data/${id}`);
    // console.log(del.data);
  };

  idsToDelete.forEach(deleteData);

  //for edit

  const editData = (id) => {
    console.log(id);
    return id;
  };

  const tupac = (id) => {
    // console.log(id);
    setDelId(id);
  };

  const handleSetIdsToDelete = (ids) => {
    // console.log(ids);
    setIdsToDelete((pre) => [...pre, ids[0]]);
    getData();
  };
  // console.log(idsToDelete);

  const justchecking = () => {
    // idsToDelete.forEach(deleteData);
    deleteData();
    getData();
  };

  return (
    <form>
      
      <Form
        onSelect={handleDepartment}
        onSelect1={handleDesignation}
        onSelect2={handleState}
        onSelect3={handleDistrict}
        onName={handleName}
        onDOB={handleDob}
        onOrgani={handleOrga}
        onDOJ={handleDoj}
        postToDB={postToDB}
        
      />
      <Edit
        editData={editData}

        // postDB={postToDB}
      />
      <Submit
        clearForm={clearForm}
        // onFormSubmit1={handleFormSubmit1}
        // onFormSubmit2={handleFormSubmit2}
        // onFormSubmit3={handleFormSubmit3}
        // onFinSubmit={onFinalSubmit}
        // getDb={getToDB}
        postDB={postToDB}
        // onClick={() => {}}
      />

      <Records
        dbData={dbData}
        parentTochild={tupac}
        onSetIdsToDelete={handleSetIdsToDelete}
        onEdit={editData}
        onName={handleName}
        onDOB={handleDob}
        onOrgani={handleOrga}
        onDOJ={handleDoj}
      />
      <input
        type="button"
        // onClick={deleteData}
        onClick={justchecking}
        style={{
          align: "center",
          padding: "5px",
          margin: "0px 0px 0px 10px",
          color: "white",
          background: "red",
        }}
        value="Delete"
      />
    </form>
  );
}

export default App;
