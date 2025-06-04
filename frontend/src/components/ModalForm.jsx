import React, { useEffect, useState } from "react";

const ModalForm = ({
  mode,
  isOpen,
  onClose,
  onSubmit,
  setModalData,
  modalData,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, job, rate: Number(rate), isActive: status };
      setModalData(data);
      await onSubmit(data); // Pass data directly
    } catch (err) {
      console.log(err);
    }
    onClose(e);
  };
  useEffect(() => {
    if (mode == "edit" && modalData) {
      setName(modalData.name);
      setEmail(modalData.email);
      setJob(modalData.job);
      setRate(modalData.rate);
      setStatus(modalData.isActive);
    } else {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setStatus(true);
    }
  }, [mode, modalData]);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box w-110 flex flex-col justify-center items-center overflow-hidden p-10">
          <form
            method="dialog"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <h3 className="font-bold text-lg">
              {mode == "add" ? "Client details" : "Edit client"}
            </h3>
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <label className="floating-label ">
              <span>Your Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-md w-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="floating-label">
              <span>Your Email</span>
              <input
                type="text"
                placeholder="mail@site.com"
                className="input input-md w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="floating-label">
              <span>Your Job</span>
              <input
                type="text"
                placeholder="Designer"
                className="input input-md w-100"
                onChange={(e) => setJob(e.target.value)}
                value={job}
              />
            </label>
            <div className="flex gap-4 ">
              <label className="floating-label">
                <span>Rate</span>
                <input
                  type="number"
                  placeholder="45"
                  className="input input-md"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                value={status ? "Active" : "Inactive"}
                className="select select-info w-50"
                onChange={(e) => setStatus(e.target.value == "Active")}
              >
                <option disabled={true}>Choose your status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button className="btn btn-success">
              {mode == "add" ? "Add record" : "Save changes"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
