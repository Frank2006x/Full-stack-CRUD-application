import axios from "axios";

const TableList = ({ onOpen, tableData, error ,onRefresh}) => {
  const handleDelete = async (id) => {
    const result = confirm("Are you sure?");
    if (result) {
      await axios.delete(`http://localhost:8000/api/clients/${id}`);
      console.log("User confirmed.");
    }
    onRefresh()
  };

  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}
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
            {tableData.map((client) => (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn ${
                      client.isActive
                        ? "btn-primary btn-outline"
                        : "btn-primary btn-soft"
                    } rounded-full `}
                  >
                    {client.isActive ? "active" : "inactive"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onOpen("edit", client)}
                    className="btn-secondary btn btn-dash"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-error btn-ghost border-0.5 border-red-500"
                    onClick={() => handleDelete(client.id)}
                  >
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
