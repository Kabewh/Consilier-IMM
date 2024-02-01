import { Kadwa } from "next/font/google"
import Image from "next/image";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

export default function Footer () {


    return (
        <div className={`h-56 bg-orange-800 text-white ${kadwa.className}`}>
            <div className="max-w-screen-xl h-full flex flex-col">
                <div className="w-1/2">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-xl">Consilier IMM</h1>
                        <div className="flex items-center justify-center mt-2">
                            <Image src={"/logo.png"} width={80} height={50}/>    
                            <p className="ml-14">Experiență juridică de 15+ ani, susținem afacerile mici și mijlocii pentru a le permite să se focuseze pe succesul lor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}