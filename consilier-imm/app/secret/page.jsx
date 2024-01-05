import { redirect } from "next/navigation"

export default function Secret() {
    const session = true
    if(!session) {
        redirect("/")
    }
    return (
        <>
        ServerSide protected route (server component)
        </>
    )
}