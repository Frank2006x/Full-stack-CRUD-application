import React from "react";

const clients = [
  {
    id: 1,
    name: "Johm",
    email: "johm@gmail.com",
    job: "carpenter",
    status: true,
    rate: 25,
  },
  {
    id: 2,
    name: "Alice",
    email: "alice@example.com",
    job: "designer",
    status: false,
    rate: 30,
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    job: "developer",
    status: true,
    rate: 40,
  },
  {
    id: 4,
    name: "Sara",
    email: "sara@example.com",
    job: "manager",
    status: false,
    rate: 35,
  },
];

const TableList = ({onOpen}) => {
  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn ${
                      client.status ? "btn-primary btn-outline" : "btn-primary btn-soft"
                    } rounded-full `}
                  >
                    {client.status ? "active" : "inactive"}
                  </button>
                </td>
                <td>
                  <button onClick={onOpen} className="btn-secondary btn btn-dash">Update</button>
                </td>
                <td>
                  <button className="btn btn-error btn-ghost border-0.5 border-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
