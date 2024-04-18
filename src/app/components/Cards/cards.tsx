import Image from "next/image";
import cards from '../../../../public/cards.png'

export default function Cars() {
    return(
        <div className="p-10">
        <h2 className="text-4xl w-2/4 ml-6 text-4xl font-medium text-dark-blue ml-[3rem]">Други Услуги</h2>
        <Image src={cards} alt="Image 1" className="mx-auto p-10"/>
        </div>
    )
}