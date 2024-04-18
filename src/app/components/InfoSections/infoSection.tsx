import Image from "next/image";
import Image01 from "../../../../public/Image01.png";

function TextSection() {
    return (
        <div className="text-center">
            <h2 className="text-4xl lg:text-4xl lg:w-2/4 lg:ml-6 p-5 lg:p-10 font-medium text-dark-blue">
                Решения
            </h2>
            <p className="text-dark-blue text-left lg:w-6/12 ml-10 lg:ml-[40vh]">
                Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
            </p>
            <span>
                <ul className="text-left list-disc ml-10 lg:ml-[40vh] p-5 lg:p-10">
                    <p className="lg:w-6/12 lg:ml-[-4vh]">
                        Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
                    </p>
                    <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
                    <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
                    <li>Взимане на стоки и доставки за от и в България;</li>
                    <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
                    <li>Регулярни групажни линии;</li>
                    <li>Транспортни услуги до Турция и Близкия изток;</li>
                    <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
                </ul>
            </span>
            <h2 className="text-4xl lg:text-4xl lg:w-2/4 lg:ml-14 p-5 lg:p-4 font-medium text-dark-blue">
                Предимства
            </h2>
            <p className="text-dark-blue text-left lg:w-5/12 ml-10 lg:ml-[40vh]">
                Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
            </p>
        </div>
    );
}

// Главният компонент за показване на информацията
export default function InfoSection() {
    return (
        <div className="text-center">
            <div className="text-4xl lg:text-7xl font-medium text-dark-blue p-4 lg:p-10">
                <h2>Гъвкави решения за сухопътен транспорт за всеки клиент</h2>
            </div>
            <Image src={Image01} alt="Image 1" className="mx-auto w-full lg:w-auto" />
            <TextSection />
        </div>
    );
}
