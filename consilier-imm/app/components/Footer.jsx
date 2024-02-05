import { Kadwa } from "next/font/google"
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { GoChevronRight } from "react-icons/go"; 
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { GoClock } from "react-icons/go";

const kadwa = Kadwa({ weight: "400", subsets: ["devanagari"] });

export default function Footer () {
    return (
        <div className={`bg-orange-800 py-10 text-white ${kadwa.className}`}>
            <div className="max-w-screen-xl mx-auto h-full flex flex-col">
                <div className="my-5">
                    <div className="flex justify-center space-x-24 list-none">
                        <div className="flex flex-col items-center">
                            <Image src={"/logo.png"} width={80} height={50}/>    
                            <h1 className="font-bold text-xl">Consilier IMM</h1>
                            <div className="flex items-center justify-center mt-2">
                                <p className="ml-14"></p>
                            </div>
                        </div>
                        <div className="flex flex-col">  
                            <h1 className="font-bold text-xl">Pagini</h1>
                            <div className="flex flex-col justify-center mt-2">
                                <li className="flex items-center">
                                    <span className="mr-4"><GoChevronRight /></span>
                                    <span>Acasa</span> 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                   Despre Noi 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                   Informatii Juridice 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                   Contact 
                                </li>
                            </div>
                        </div>
                        <div className="flex flex-col">  
                            <h1 className="font-bold text-xl">Servicii</h1>
                            <div className="flex flex-col justify-center mt-2">
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                    Serviciu oferit 1 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                    Serviciu oferit 2 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                    Serviciu oferit 3 
                                </li>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">Contact</h1>
                            <div className="flex flex-col justify-center mt-2">
                                <li className="flex items-center">
                                <span className="mr-4"><GoLocation /></span>
                                   Strada Poiana Florilor nr. 15, et. 4, ap. 10
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoMail /></span>
                                   consilier-imm@consilier-imm.com 
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><FiPhone /></span>
                                   031.424.31.44
                                </li>
                                <li className="flex items-center">
                                <span className="mr-4"><GoChevronRight /></span>
                                   Luni - Vineri: 9:00 17:00 
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}