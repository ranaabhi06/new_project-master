import React, { useState } from "react";



function Records(props) {
  const { dbData } = props;
  console.log(dbData);
// let name = props.onName();
// console.log(name);

// let dob = props.onDOB();
// console.log(dob);
  // const [idsToDelete, setIdsToDelete] = useState([]);
  // console.log(idsToDelete);

  let arrayId = [];
  const setIdToDelete = (id) => {
    arrayId.push(id);
    props.onSetIdsToDelete(arrayId);
  };

  // setIdsToDelete(arrayId);
  // console.log(idsToDelete);
  //function for delete
  const idToEdit = (node) => {
    console.log(props.onEdit(node));
  };

  return (
    <>
      <div>
        <p>
          {" "}
          <b>--RECORDS--</b>
        </p>

        {dbData &&
          dbData.map((info) => {
            return (
              <form>
                <input
                  onChange={(event) => {
                    setIdToDelete(info.id);
                  }}
                  type="checkbox"
                />
                <br />
                <label htmlFor="">
                  <strong>ID: </strong>
                </label>
                <b>{info.id}</b>
                <br />
                <label htmlFor="">Name: </label>
                {info.name.name}
                <br />
                <label htmlFor="">Organization: </label>
                {info.dob.dob}
                <br />
                <label htmlFor="">DOB: </label>
                {info.organisation.organisation}
                <br />
                <label htmlFor="">DOJ: </label>
                {info.doj.doj}
                <br />
                <label htmlFor="">Gender: </label>
                
                <br />
                <label htmlFor="">Fav_Editor: </label>
              
                <br />
                <label htmlFor="">Fav_Language: </label>
               
                <br />

                <label htmlFor="">Deparment: </label>
                {info.formValues.department}
                <br />
                <label htmlFor="">Designation: </label>
                {info.desValue.designation}
                <br />
                <label htmlFor="">State: </label>
                {info.stateValue.States}
                <br />
                <label htmlFor="">District: </label>
                {info.districtValue.districts}
                <br></br>
                <input
                  type="button"
                  onClick={() => {
                    idToEdit(info.id);
                    // idToEdit(info.id,info.formValues.department,info.desValue.designation ,info.stateValue.States ,info.districtValue.districts )
                  }}
                  style={{
                    align: "center",
                    padding: "5px",
                    margin: "10px 0px 0px 10px",
                    color: "white",
                    background: "green",
                  }}
                  value="Edit"
                />
              </form>
            );
          })}
      </div>
      <br />
      <br />
    </>
  );
}

export default Records;
