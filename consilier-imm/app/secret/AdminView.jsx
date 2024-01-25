import React, { useState } from "react";
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
    photo: "",
  });

  const formData = new FormData()

  const loggedIn = pb.authStore.isValid;

  const addArticle = async (e) => {
    e.preventDefault();
    if (!data.content || !data.description || !data.title) return;
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('content', data.content)
    formData.append('photo', data.photo)
    console.log(formData)
    const record = await pb.collection("articles").create(formData)
    if (record.created) 
    {
      alert("Articol adaugat cu succes!");
    }
  };

  return (
    <div className={`${kadwa.className} mt-10 mx-auto`}>
      {open ? (
        <section className="mx-auto flex flex-col w-2/5">
          <button
            className="bg-red-500 p-2 w-10"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <form onSubmit={addArticle} className="flex flex-col">
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
            <label>Poza</label>
            <input
              type="file"
              className="border"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  photo: e.target.files[0],
                }))
              }
            />
            <button className="self-start bg-green-500 p-2">Adauga</button>
          </form>
        </section>
      ) : (
        <UserView session={loggedIn} />
      )}
      <div className="flex flex-col items-end">
        {!open && <button
          onClick={() => setOpen(true)}
          className="text-white p-3 bg-orange-500 shadow-lg rounded-md hover:bg-orange-600 transition w-48 mb-10"
        >
          ADAUGA ARTICOL
        </button>}
      </div>
    </div>
  );
};

export default AdminView;
