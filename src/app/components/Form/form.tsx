import './form.css'

export default function Form() {
    return(
        <div className="background text-center">
            <div className="h-[45vh] w-[130vh]">
                <h1 className='text-white font-bold w-7/12 p-10 text-6xl ml-[25vh]'>Готови ли сте да работим заедно?</h1>
                <p className='text-white w-5/12 ml-[20rem]'>Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
                <form action="" className='mt-[5vh] ml-[-2rem]'>
                    <input type="text" placeholder='Мобилен Телефон' className='h-12 p-4 border rounded-l'/>
                    <button className='bg-yellow-200 w-24 h-12 border rounded-r border-none'>Изпрати</button>
                </form>
            </div>
        </div>
    )
}
