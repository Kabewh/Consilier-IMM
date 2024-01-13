import React, { useEffect, useState } from "react";
import { Kadwa } from "next/font/google";
import { pb } from "../(auth)/auth";
import UserView from "./UserView";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

const AdminView = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
  });

  const loggedIn = pb.authStore.isValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.content || !data.description || !data.title) return;
    const record = await pb.collection("articles").create(data);
    if (record.created) alert("Articol adaugat cu succes!");
  };

  return (
    <div className={`${kadwa.className} mx-3 mt-10`}>
      <button
        onClick={() => setOpen(true)}
        className="text-white p-3 bg-orange-500 shadow-lg rounded-md hover:bg-orange-600 transition"
      >
        ADAUGA ARTICOL
      </button>
      {open ? (
        <section className="ml-48 flex flex-col w-2/5">
          <button
            className="bg-red-500 p-2 w-10 self-end"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label>Titlu</label>
            <input
              type="text"
              className="border outline-none"
              value={data.title}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
            />
            <label>Descriere</label>
            <input
              type="text"
              className="border"
              value={data.description}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }))
              }
            />
            <label>Continut</label>
            <textarea
              className="border"
              value={data.content}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  content: e.target.value,
                }))
              }
            />
            <button className="self-start bg-green-500 p-2">Send</button>
          </form>
        </section>
      ) : (
        <UserView session={loggedIn} />
      )}
    </div>
  );
};

export default AdminView;
