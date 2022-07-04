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
                <label htmlFor=""><em><b>Name:  &nbsp;</b></em></label>
                {info.name.name}
                <br />
                <label htmlFor=""><em><b>Organization:  &nbsp; </b></em></label>
                {info.organisation.organisation}
                <br />
                <label htmlFor=""><em><b>DOB:</b></em></label>&nbsp;
                {info.dob.dob}
                <br />
                <label htmlFor=""><em><b>DOJ:   &nbsp;</b></em></label>
                {info.doj.doj}
                <br />
                <label htmlFor=""><em><b>Gender:  &nbsp; </b></em></label>
                
                <br />
                <label htmlFor=""><em><b>Are You Ex-Employee: &nbsp; </b></em></label>
                
                <br />
                <label htmlFor=""><em><b>Fav_Editor:  &nbsp;</b></em> </label>
              
                <br />
                <label htmlFor=""><em><b>Fav_Language:  &nbsp;</b></em> </label>
               
                <br />

                <label htmlFor=""><em><b>Deparment:  &nbsp;</b></em> </label>
                {info.formValues.department}
                <br />
                <label htmlFor=""><em><b>Designation:  &nbsp;</b></em> </label>
                {info.desValue.designation}
                <br />
                <label htmlFor=""><em><b>State:   &nbsp;</b></em></label>
                {info.stateValue.States}
                <br />
                <label htmlFor=""><em><b>District:   &nbsp;</b></em></label>
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
                /><br></br>
                <br></br>
                
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
