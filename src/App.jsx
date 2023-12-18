import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

const App = () => {
  return (
    <div>
      {/* header */}
      <header className="py-[31px] lg:px-[180px] sm:px-[90px]">
        <nav className='flex items-center gap-[300px]'>
          <img src="src/assets/nav/Logo.png" alt="" />
          <div className='lg:flex items-center gap-[57px] sm:hidden'>
            <img src="src/assets/nav/svg-editor-image-6.png" alt="" />
            <img src="src/assets/nav/svg-editor-image-7.png" alt="" />
            <p className='flex items-center gap-[10px] text-[#1E959B] font-[700]'><img src="src/assets/nav/Group (6).png" alt="" />+7 800 301-79-27</p>
            <button className='bg-[#F05670] text-white rounded-[15px] px-[25px] py-[15px]'>НАЧАТЬ ПРОЕКТ</button>
          </div>
        </nav>
      </header>

      {/* section 1 */}

      <section className='flex lg:justify-center items-center lg:gap-[180px]  lg:pt-[50px] sm:flex-wrap'>
        {/* left */}
        <aside>
          <h1 className='text-[#1E959B] font-[700] text-[32px] uppercase lg:w-[222px] leading-[40px] pb-[20px] lg:text-start sm:text-center'>Разработка IT‑продуктов</h1>
          <p className='text-[14px] text-[#3C3C3C] lg:w-[320px] leading-[20px] lg:pb-[50px] sm:pb-[20px] sm:px-[24px] lg:px-[0]'>Разработаем проект с нуля, доработаем текущий проект или усилим вашу ИТ-команду лучшими разработчиками на рынке</p>
          <button className='bg-[#F05670] text-white rounded-[15px] px-[25px] py-[15px] lg:inline sm:block sm:m-[auto]' id="btn">НАЧАТЬ НОВЫЙ ПРОЕКТ</button>
        </aside>

        {/* right */}
        <aside>
          <img src="src/assets/nav/Frame (1).png" className='lg:mt-[0] sm:mt-[40px]'/>
        </aside>
      </section>

      {/* section 2 */}
      <section className='bg-[#1E959B] flex lg:justify-center items-center gap-[80px] p-[20px]'>
        <img src="src/assets/logs/wooter 1.png" />
        <img src="src/assets/logs/Слой 2.svg" className='lg:block sm:hidden' />
        <img src="src/assets/logs/Group 104 (1).svg"className='lg:block sm:hidden' />
        <img src="src/assets/logs/Group 92 (1).svg" className='lg:block sm:hidden' />
        <img src="src/assets/logs/Vector (1).svg" className='lg:block sm:hidden' />
      </section>


      {/* section 3 */}
      <section className='lg:pt-[120px]'>

        {/* all div */}
        <div className='flex lg:justify-center items-center gap-[50px]'>
        <Card1 img={"src/assets/card1/Group 97 (1).png"} h1={"Проведём интервью"} stl="lg:ml-[0] sm:ml-[100px] lg:mt-[0] sm:mt-[40px]"/>
        <Card1 img={"src/assets/card1/Group 96.png"} h1={"Составим план"} stl={"lg:flex sm:hidden"}/>
        <Card1 img={"src/assets/card1/Group 95 (1).png"} h1={"Соберём команду"} stl={"lg:flex sm:hidden"}/>
        <Card1 img={"src/assets/card1/Group 94 (1).png"} h1={"Разработаем продукт"} stl={"lg:flex sm:hidden"} />
        <Card1 img={"src/assets/card1/Group 93 (1).png"} h1={"Улучшим метрики"} stl={"lg:flex sm:hidden"}/>
        </div>

        <div className='pt-[50px] flex lg:justify-center items-center lg:gap-[200px] sm:flex-wrap'>
       {/* left */}
        <aside>
          <img src="src/assets/main_img/image 2 (3).png" className='lg:mt-[0] sm:mt-[40px]'/>
        </aside>

        {/* right */}
        <aside>
          <h1 className='text-[#1E959B] font-[700] lg:text-[32px] uppercase lg:w-[371px] leading-[40px] pb-[20px] lg:text-start sm:text-center sm:text-[30px] lg:mt-[0] sm:mt-[40px]'>Проведём интервьюи подготовим проект к разработке</h1>
          <p className='text-[14px] text-[#3C3C3C] lg:w-[310px] leading-[20px] lg:pb-[30px] sm:pb-[20px] sm:px-[24px] lg:px-[0]'>Проведём продуктовое интервью онлайн и дадим рекомендации по подготовке проекта к разработке. Это бесплатно.</p>
          <button className='bg-[#F05670] text-white rounded-[15px] px-[25px] py-[15px] lg:inline sm:block sm:m-[auto] uppercase' id="btn">Записаться на интервью</button>
        </aside>
        </div>

      </section>


      {/* section 4 */}
      <section className='lg:py-[100px] sm:py-[50px]'> 
        <h1 className='text-[#1E959B] text-[32px] uppercase text-center font-[700] lg:block sm:hidden'>ПРОЕКТЫ командЫ PRODUCTFIT</h1>

        <div className='flex flex-wrap justify-center items-center gap-[80px] lg:px-[100px] py-[60px]'>
          <Card2 img={"src/assets/card2/image 19.png"} h6={"Cabify"} p={"Кроссплатформенное приложение под Android и iOS разработано на React Native(Python)"}/>
          <Card2 img={"src/assets/card2/image 20.png"} h6={"Ural Airlines"} p={"Все сервисы для пассажиров «Уральских авиалиний» в одном приложении на Swift и Java"}/>
          <Card2 img={"src/assets/card2/image 21.png"} h6={"OpenGift"} p={"Система монетизации OpenSource-проектов на основе блокчейна hyperledger fabric"}/>
          <Card2 img={"src/assets/card2/image 22.png"} h6={"PlanDi"} p={"Сервис поиска актуальной работы проектировщикам и компаниям"}/>
          <Card2 img={"src/assets/card2/image 23.png"} h6={"Коалиция"} p={"Проект для ведущего в России Центра образования, который осуществляет подготовку школьников к сдаче ЕГЭ."}/>
          <Card2 img={"src/assets/card2/image 24.png"} h6={"Rubetek"} p={"Управление домом IoT и микрофреймворк на языке Python совместно с Java и Swift"}/>
        </div>
        <button className='bg-[#ffffff00] text-[#1E959B] rounded-[15px] px-[25px] py-[15px] sm:block sm:m-[auto] uppercase' id="btn1">Все проекты</button>
        <div>

        </div>
      </section>

      {/* section 5 */}
      <section id="sec5" className='p-[24px]'>
        <div className='flex lg:justify-center items-center lg:gap-[100px] sm:flex-wrap'>
          {/* left */}
          <aside className='lg:py-[0] sm:py-[50px]'>
          <h3 className='uppercase text-[#F05670] text-[16px] font-[700] lg:text-start sm:text-center '>09 Августа 2021</h3>
          <h1 className='uppercase lg:w-[608px] lg:text-[32px] font-[700] text-[#1E959B] lg:text-start sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
          </aside>
          {/* right */}
          <aside>
            <img src="src/assets/main_img/Character.png" alt="" />
          </aside>
        </div>
      </section>


      {/* scetion 6 */}
      <section className='lg:py-[250px] sm:py-[60px]'>

       <div className='flex flex-col gap-[250px] '>

       <div className='bg-[#1E959B] h-[154px] flex justify-center gap-[50px] items-center lg:pl-[0] sm:pl-[150px] lg:my-[0] sm:my-[80px]'>
          <Card3 img={"src/assets/card3/Group (2).png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"}/>
          <Card3 img={"src/assets/card3/Out line.png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"} stl={"lg:block sm:hidden"}/>
          <Card3 img={"src/assets/card3/Group 5.png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ" } stl={"lg:block sm:hidden"}/>
          <Card3 img={"src/assets/card3/Vector (2).png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"} stl={"lg:block sm:hidden"}/>
        </div>

        <div className='bg-[#1E959B] h-[154px] lg:flex justify-center gap-[50px] sm:hidden items-center'>
          <Card3 img={"src/assets/card3/Group (3).png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"}/>
          <Card3 img={"src/assets/card3/Слой 1.png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"}/>
          <Card3 img={"src/assets/card3/Group (4).png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"}/>
          <Card3 img={"src/assets/card3/Group 185.png"} h1={"Ecommerce"} btn={"ЗАКАЗАТЬ"}/>
        </div>
       </div>

      </section>



      {/* section 7 */}
      <section className='lg:py-[110px] flex lg:justify-center items-center lg:gap-[180px] sm:flex-wrap lg:pl-[0] sm:pl-[54px] sm:gap-[50px] sm:py-[50px]'>

        {/* left */}
        <aside>
          <img src="src/assets/main_img/Group (5).png" alt="" />
        </aside>

        {/* right */}
        <aside>
        <button className='bg-[#F05670] text-white rounded-[15px] px-[35px] py-[20px] lg:inline sm:block sm:m-[auto]' id="btn">ОСТАВИТЬ ЗАЯВКУ</button>
        </aside>

      </section>

      {/* footer */}
      <footer className='lg:px-[110px] py-[38px] sm:px-[24px]'>
        <div className='flex items-center lg:justify-around text-[#1E959B] font-[700] sm:flex-wrap lg:gap-[40px] sm:gap-[30px]'>
        <img src="src/assets/footer/Logo (1).png" alt="" />
        <div className='flex flex-col gap-[8px] font-[400]'>
          <p>Мобильные приложения</p>
          <p>Главная страница</p>
        </div>
        <div className='flex flex-col gap-[8px]'>
          <p>Связаться с нами</p>
          <p className='flex items-center gap-[10px] text-[#1E959B] font-[700]'><img src="src/assets/nav/Group (6).png" alt="" />+7 800 301-79-27</p>
        </div>
        <img src="src/assets/nav/svg-editor-image-6.png" alt="" />
        <img src="src/assets/nav/svg-editor-image-7.png" alt="" />
        <div className='flex items-center gap-[8px]'>
          <img src="src/assets/footer/Group 61 (1).png" alt="" />
          <p className='w-[290px] text-[14px] text-[black] font-[400]'>Индивидуальный предприниматель Степанов Георгий Константинович Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269 ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК" БИК 044525092 К/c 30101810645250000092 Счет 40802810970010085488</p>
        </div>
        </div>
        <p className='text-center text-[rgba(60,60,60,0.50)] text-[16px] lg:pt-[0] sm:pt-[50px]'>Copyright © 2021 ProductFit</p>
      </footer>

    </div>
  )
}

export default App