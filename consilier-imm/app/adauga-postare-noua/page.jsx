'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { pb } from '../(auth)/auth';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { redirect } from 'next/navigation';

export default function AdaugaPostareNoua() {
    const [data, setData] = useState({
        title: "",
        description: "",
        content: "",
        photo: "",
    });

    const addArticle = async (e) => {
        e.preventDefault();
        if (!data.content || !data.description || !data.title) return;
        const record = await pb.collection("articles").create(data);
        if (record.created) {
          alert("Articol adaugat cu succes!");
        }
      };

    return(
        <>
        <Topbar/>
        <div className="h-screen">
        <Navbar/>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-24">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form className="flex flex-col" onSubmit={addArticle}>
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="text-xl text-gray-600">Description</label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="description"
                    id="description"
                    placeholder="Descriere"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                </div>

                <div className="mb-8 flex flex-col">
                  <label className="text-xl text-gray-600">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={data.content}
                    onChange={(event, editor) => {
                      const content = editor.getData();
                      setData({ ...data, content: content });
                    }}
                  />
                </div>

                <div className="flex p-1">
                  <select className="border-2 border-gray-300 border-r p-2" name="action">
                    <option>Save and Publish</option>
                    <option>Save Draft</option>
                  </select>
                  <button
                    type="submit"
                    className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                    required
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
    )
}