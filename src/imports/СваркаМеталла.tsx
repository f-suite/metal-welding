import svgPaths from "./svg-bwc1rtnibf";

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 2">
          <path d={svgPaths.p3a3b3200} fill="var(--stroke-0, black)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запросить расчет</p>
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">{`Изготавливаем и свариваем металлические изделия любой сложности: от единичных деталей до серийных партий. Работаем со сталью, нержавеющей сталью , алюминием и цветными металлами. Выполняем заказы по чертежам или разрабатываем проект под вашу задачу `}</p>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="font-['Montserrat:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[56px] text-black text-nowrap uppercase">
        <p className="mb-0">{`Сварка металла — `}</p>
        <p>профессиональные услуги под ключ</p>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[563px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Мы выполняем сварку:</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Конструкций любой сложности</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Малых, средних и крупных партий</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">По чертежам и техническим заданиям</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">С последующей механической и декоративной обработкой</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame42 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Работаем по готовым проектам или разрабатываем чертежи под изделие.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">НАши возможности</p>
      <Frame54 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex h-[547px] items-center justify-center px-[280px] py-[204px] relative shrink-0 w-[680px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[51px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] w-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[01]</p>
      <p className="relative shrink-0 text-black w-full">Опыт в серийном и нестандартном производстве</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col h-[129px] items-start p-[9px] relative shrink-0 w-[330px]">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] grow items-start justify-between leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] w-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[02]</p>
      <p className="relative shrink-0 text-black w-full">Точное соблюдение сроков</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col h-[129px] items-start p-[9px] relative shrink-0 w-[330px]">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame55 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[51px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] w-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[03]</p>
      <p className="relative shrink-0 text-black w-full">Понятная смета без скрытых платежей</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col h-[129px] items-start p-[9px] relative shrink-0 w-[330px]">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame56 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] grow items-start justify-between leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] w-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[04]</p>
      <p className="relative shrink-0 text-black w-full">Полный цикл: от резки до готового изделия</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col h-[129px] items-start p-[9px] relative shrink-0 w-[330px]">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame64 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] grow items-start justify-between leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] w-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[05]</p>
      <p className="relative shrink-0 text-black w-full">Возможность срочного выполнения заказа</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 grow h-[129px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Преимущества работы с нами</p>
      <Frame38 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <Frame19 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full" />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">MIG/MAG (полуавтоматическая сварка)</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Оптимальна для стали, оцинкованной стали и крупных конструкций. Надёжные швы, высокая скорость, минимальная стоимость.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full" />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">TIG (аргонодуговая сварка)</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">
        Идеальна для нержавейки и алюминия.
        <br aria-hidden="true" />
        Аккуратный внешний вид, точность и чистота шва.
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full" />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">MMA (ручная дуговая сварка)</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Подходит для толстостенных конструкций и труднодоступных мест. Обеспечивает высокую прочность соединения.</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <Frame68 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Виды сварки, которые мы выполняем</p>
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Черная сталь</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <Frame70 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 grow h-[199px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[13px] relative size-full">
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Нержавеющая сталь</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <Frame71 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 grow h-[199px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[13px] relative size-full">
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Алюминий</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <Frame73 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 grow h-[199px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[13px] relative size-full">
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Оцинкованная сталь</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <Frame75 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 grow h-[199px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[13px] relative size-full">
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame59 />
      <Frame60 />
      <Frame58 />
      <Frame57 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[22px] items-start p-[30px] relative w-full">
          <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black uppercase w-[min-content]">Материалы</p>
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Мы работаем со всеми распространёнными типами металлов:</p>
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Каркасы и металлоконструкции</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Строительные металлоконструкции по ГОСТу</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Кронштейны, рамки, опоры</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Корпуса и детали оборудования</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Ограждения, навесы, ворота</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Декоративные изделия</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Нестандартные металлические узлы</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">Изделия «под ключ» после резки и гибки</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame83 />
      <Frame84 />
      <Frame85 />
      <Frame86 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Что мы изготавливаем</p>
      <Frame82 />
      <Frame87 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame88 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Каждое изделие проходит контроль геометрии и качества швов.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">Небольшие детали</p>
      <p className="relative shrink-0">Партии изделий</p>
      <p className="relative shrink-0">Крупные конструкции</p>
      <p className="relative shrink-0">Срочно</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap">Тип заказа:</p>
      <Frame17 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">от 1 дня</p>
      <p className="relative shrink-0">2–5 дней</p>
      <p className="relative shrink-0">3–10 дней</p>
      <p className="relative shrink-0">по договорённости</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap">Срок</p>
      <Frame90 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[446px]">
      <Frame89 />
      <Frame91 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black uppercase w-[min-content]">Сроки выполнения</p>
      <Frame18 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 2">
          <path d={svgPaths.p3a3b3200} fill="var(--stroke-0, black)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запросить расчет</p>
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame52 />
      <Frame93 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#d9d9d9] h-[325px] relative shrink-0 w-[680px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Прочные, герметичные, аккуратные швы</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Контроль качества каждого соединения</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Соблюдение ГОСТ и ТУ</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Гарантия соответствия чертежу</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame102 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Гарантии</p>
      <Frame103 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запрос или звонок</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/01</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame21 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Получение чертежа / разработка ТЗ</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/02</p>
      <Frame105 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame106 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Расчет стоимости и сроков</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/03</p>
      <Frame107 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame108 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Подготовка деталей</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/04</p>
      <Frame109 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame110 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Сварочные работы</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/05</p>
      <Frame111 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame112 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Зачистка, покраска, контроль качества</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/06</p>
      <Frame113 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame114 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Выдача или доставка заказа</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[18px]" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[40px] text-nowrap uppercase">/07</p>
      <Frame115 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame116 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1380px]">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black uppercase w-[min-content]">Этапы работы</p>
      <Frame29 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <span>{`*Весь процесс прозрачен: `}</span>
        <span className="font-['Montserrat:Medium',sans-serif]">вы всегда понимаете</span>, на какой стадии находится проект.
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Сертификат</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[20px] h-[546px] items-start relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Frame117 key={i} />
      ))}
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Наши сертификаты</p>
      <Frame39 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase whitespace-nowrap">Наши работы</p>
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_4_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_4_370)">
            <path d={svgPaths.p11a80500} fill="var(--fill-0, #1C1B1F)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#e9e9e9] content-stretch flex items-center p-[18px] relative size-[60px]">
      <ArrowForwardIos />
    </div>
  );
}

function ArrowForwardIos1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_4_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_4_370)">
            <path d={svgPaths.p11a80500} fill="var(--fill-0, #1C1B1F)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center p-[18px] relative shrink-0 size-[60px]">
      <ArrowForwardIos1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame44 />
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[350px]">
      <Frame119 />
      <Frame40 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[555px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame41 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame120 key={i} />
      ))}
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame121 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[15px] px-[16px] py-[10px] top-[301px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Алексей</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[442px] px-[16px] py-[10px] top-[301px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Старший менеджер</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[680px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">{`Фото менеджера и его должность `}</p>
          <Frame45 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[62px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] text-nowrap tracking-[-0.32px]">Имя</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] text-nowrap tracking-[-0.32px]">Телефон</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[151px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] text-nowrap tracking-[-0.32px]">Комментарии...</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 2">
          <path d={svgPaths.p3a3b3200} fill="var(--stroke-0, black)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Отправить</p>
      <Frame124 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[680px]">
      <Frame47 />
      <Frame125 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame123 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Остались вопросы?</p>
      <Frame49 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[140px] items-end left-[26px] top-[133px] w-[1385px]">
      <Frame61 />
      <Frame13 />
      <Frame31 />
      <Frame14 />
      <Frame51 />
      <Frame15 />
      <Frame97 />
      <Frame104 />
      <Frame30 />
      <Frame118 />
      <Frame122 />
      <Frame50 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Сварка металла">
      <Frame62 />
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] left-[calc(50%-72px)] not-italic text-[40px] text-black text-nowrap top-[20px] uppercase">ХЕДЕР</p>
      <p className="absolute font-['Montserrat:Bold',sans-serif] leading-[normal] left-[calc(50%-73px)] not-italic text-[40px] text-black text-nowrap top-[7095px] uppercase">ФУтер</p>
    </div>
  );
}