import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const RecordDeatils: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const record = useSelector((state: RootState) =>
    state.records.value.find((record) => record.id === Number(id))
  );

  if (!record) {
    return <div>Record not found</div>;
  }
  return (
    <div>
      <h2>Details</h2>
      <div className="container px-5  justify-center items-center py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap">
          <div className="p-4">
            <div className="border-2 rounded-lg border-gray-200 flex flex-col justify-center items-center border-opacity-50 p-8">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {`Name : ${record.name}`}
              </h2>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {`Email : ${record.email}`}
              </h2>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {`Phone : ${record.phone}`}
              </h2>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {`Address : ${record.address}`}
              </h2>
              <button
                onClick={() => navigate("/")}
                className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordDeatils;
