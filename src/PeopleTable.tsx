import React from "react";

export function PeopleTable({ people }) {
  const headers = [
    "name",
    "sex",
    "born",
    "died",
    "fatherName",
    "motherName",
    "slug"
  ];

  return (
    <table className="PeopleTable">
      <thead>
        <tr>
          {headers.map((key) => (
            <th style={{ textTransform: "capitalize" }}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {people.map((person) => {
          return (
            <tr>
              {headers.map((key) => {
                return <td>{person[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
