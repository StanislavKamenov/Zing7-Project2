import Image from "next/image";
import card1 from '../../../../public/card1.png'
import card2 from '../../../../public/card2.png'
import card3 from '../../../../public/card3.png'

export default function Cars() {
    return (
        <div className="p-10">
            <h2 className="text-4xl w-2/4 ml-6 font-medium text-dark-blue ml-[3rem]">Други Услуги</h2>
            <div className="flex flex-wrap justify-center md:flex-nowrap">
                <div className="p-2 sm:p-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <Image src={card1} alt="Image 1" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={350} height={350}/>
                </div>
                <div className="p-2 sm:p-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <Image src={card2} alt="Image 2" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={350} height={350}/>
                </div>
                <div className="p-2 sm:p-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <Image src={card3} alt="Image 3" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={350} height={350}/>
                </div>
            </div>
        </div>
    )
}
