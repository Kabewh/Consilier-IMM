import React from "react";
import { Kadwa } from "next/font/google";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

const AdminView = () => {
  const handleClick = () => {
    return <></>;
  };

  return (
    <div className={kadwa.className}>
      <button
        onClick={handleClick}
        className="mt-10 text-white p-3 bg-orange-500 shadow-lg rounded-md hover:bg-orange-600 transition"
      >
        ADAUGA ARTICOL
      </button>
    </div>
  );
};

export default AdminView;
