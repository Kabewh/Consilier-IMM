import { useState } from 'react';
import Link from 'next/link';

function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative'>
      <button
        id="dropdownDefaultButton"
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none text-center inline-flex items-center"
        type="button"
      >
        PANOU DE ADMINISTRARE
        <svg
          className={`w-2.5 h-2.5 ms-3 ${open ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 z-10 divide-y divide-gray-100 rounded-sm shadow w-46 bg-orange-900">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href="/admin_panel" className="block px-4 py-2 hover:bg-white/10">Modifica Utilizatori</Link>
            </li>
            <li>
              <Link href="/adauga-postare-noua" className="block px-4 py-2 hover:bg-white/10">Adauga Postare Noua</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
