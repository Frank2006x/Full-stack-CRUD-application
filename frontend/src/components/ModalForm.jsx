import React from "react";

const ModalForm = ({ mode, isOpen, onClose, onSubmit }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box w-110 flex flex-col justify-center items-center overflow-hidden p-10">
          <form method="dialog" className="flex flex-col gap-6">
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
              />
            </label>
            <label className="floating-label">
              <span>Your Email</span>
              <input
                type="text"
                placeholder="mail@site.com"
                className="input input-md w-100"
              />
            </label>
            <label className="floating-label">
              <span>Your Job</span>
              <input
                type="text"
                placeholder="Designer"
                className="input input-md w-100"
              />
            </label>
            <div className="flex gap-4 ">
              <label className="floating-label">
                <span>Rate</span>
                <input
                  type="number"
                  placeholder="45"
                  className="input input-md"
                />
              </label>
              <select defaultValue="inactive" className="select select-info w-50">
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
