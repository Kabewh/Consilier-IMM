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

export async function getLoggedInUserDetails(username){
  try{
    const userDetails = await pb.collection("users").getFirstListItem(`username="${username}"`)
    const admin = userDetails.Role
    return admin
  } catch (error) {
    console.log("Error:", error)
  }
}

