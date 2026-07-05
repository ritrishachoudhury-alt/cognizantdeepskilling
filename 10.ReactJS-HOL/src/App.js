import React from "react";

function App() {

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      Name: "WeWork",
      Rent: 85000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeSpaces[0].Image}
        alt="Office Space"
        width="400"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green",
          fontWeight: "bold"
        }}
      >
        Rent: {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (

        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            margin: "15px"
          }}
        >

          <img
            src={item.Image}
            alt={item.Name}
            width="300"
          />

          <h3>{item.Name}</h3>

          <p
            style={{
              color: item.Rent < 60000 ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            Rent: {item.Rent}
          </p>

          <p>Address: {item.Address}</p>

        </div>

      ))}

    </div>
  );
}

export default App;