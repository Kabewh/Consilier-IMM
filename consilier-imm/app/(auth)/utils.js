import { pb } from "./auth";
import { useRouter } from "next/navigation"

export async function login(username, password, loginStore) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(username, password);
    loginStore();
    
  } catch (error) {
    console.log("Error:", error);
  }
}

