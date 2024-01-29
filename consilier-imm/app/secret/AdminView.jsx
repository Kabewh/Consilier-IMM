import React, { useState, useEffect } from "react";
import { Kadwa } from "next/font/google";
import { pb } from "../(auth)/auth";
import AdaugaPostareNoua from "../adauga-postare-noua/page";
import UserView from "./UserView";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

const AdminView = () => {
  const [open, setOpen] = useState(false);
  const loggedIn = pb.authStore.isValid;

  return (
    <div className={`${kadwa.className} mt-10 mx-auto mb-10`}>
      <UserView session={loggedIn} />
    </div>
  );
};

export default AdminView;
