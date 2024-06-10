import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecord, Record } from "../feature/records/recordSlice";

interface CreateRecordProps {
  onClose: () => void;
}

const CreateRecord: React.FC<CreateRecordProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: Record = { id: Date.now(), name, email, phone, address };
    dispatch(addRecord(newRecord));
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Create New Record
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-start items-center">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded w-full ml-2"
              required
            />
          </div>
          <div className="mb-4 flex justify-start items-center">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full ml-2"
              required
            />
          </div>
          <div className="mb-4 flex justify-start items-center">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{10}"
              maxLength={10}
              minLength={10}
              value={phone}
              placeholder="Phone number"
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 border rounded w-full ml-2"
              required
            />
          </div>

          <div className="mb-4 flex justify-start items-center">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 border rounded w-full ml-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-4"
          >
            Create Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecord;
