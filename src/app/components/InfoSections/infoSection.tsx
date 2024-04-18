import Image from "next/image";
import Image01 from "../../../../public/Image01.png";

function TextSection() {
    return (
      <div className="text-center">
        <h2 className="text-4xl w-2/4 ml-6 text-4xl padding-x font-medium text-dark-blue p-10">
          Решения
        </h2>
        <p className="text-dark-blue text-left w-6/12 ml-[40vh]">
          Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме
          услуги за всички видове бизнес – от малки местни предприятия до
          мултинационални компании.
          </p>
          <span>
            <ul className="text-left list-disc ml-[40vh] p-10">
            <p className="w-6/12 ml-[-4vh]">Ние обработваме вашата пратка като всяка друга голяма товарна пратка –
            старателно и професионално.</p>
              <li>
                Решения за всички видове стоки (конвенционални, изискващи
                температурен режим, опасни товари)
              </li>
              <li>
                Превоз на стоки от и до Балканите и всички страни на ЕС, цели и
                частични товари;
              </li>
              <li>Взимане на стоки и доставки за от и в България;</li>
              <li>
                Съчетаване на дълги и къси дестинации за ефективно планиране и
                разходи;
              </li>
              <li>Регулярни групажни линии;</li>
              <li>Транспортни услуги до Турция и Близкия изток;</li>
              <li>
                Спазване на изискванията за качество и стандарти на клиентите и/или
                на техни специфични изисквания.
              </li>
            </ul>
          </span>
  
        <h2 className="text-4xl w-2/4 ml-6 text-4xl padding-x font-medium text-dark-blue p-10 w-54 ml-[5vh]">
          Предисмтва
        </h2>
        <p className="text-dark-blue text-left w-5/12 ml-[40vh]">
          Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме
          услуги за всички видове бизнес – от малки местни предприятия до
          мултинационални компании.
          </p>

          <p className="p-4 text-dark-blue w-6/12 ml-[38vh] text-left">Ние обработваме вашата пратка като всяка друга
          голяма товарна пратка – старателно и професионално.</p>
        
      </div>
    );
  }
// Главният компонент за показване на информацията
export default function InfoSection() {
  return (
    <div className="text-center">
      <div className="text-7xl font-meduim text-dark-blue p-4">
        <h2 className="p-10">Гъвкави решения за сухопътен транспорт за всеки клиент</h2>
      </div>
      <Image src={Image01} alt="Image 1" className="mx-auto" />
      <TextSection />
    </div>
  );
}
