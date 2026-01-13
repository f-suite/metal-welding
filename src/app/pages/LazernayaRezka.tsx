import { useRef, useState, FormEvent } from "react";
import Slider from "react-slick";
import emailjs from "@emailjs/browser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";
import { emailjsConfig } from "../../config/emailjs.config";
import svgPaths from "../../imports/svg-mj3zdjuk7f";
import { Layout } from "../components/Layout";

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
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запросить расчет</p>
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-full break-words">{`Профессиональная лазерная резка металла любой сложности. Высокая точность реза, идеальные края и быстрые сроки — от 1 часа. Работаем как с единичными деталями, так и с серийным производством. Выполняем сложные контуры, тонкие элементы и аккуратную резку там, где требуется максимальная точность`}</p>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
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
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black uppercase w-full">
        <p className="mb-0 font-bold break-words">{`Лазерная резка — профессиональные услуги под ключ`}</p>
      </div>
      <Frame12 />
    </div>
  );
}


function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Резка по чертежам DXF, DWG</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Высокая точность — до ±0,05 мм</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Быстрое изготовление — от 1 дня, срочно от 3 часов</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Чистый рез без термодеформаций и заусенцев</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">Мы выполняем лазерную резку:</p>
      <Frame42 />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">Современное оборудование для реза любой сложности и объёма.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Наши возможности</p>
      <Frame54 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#d9d9d9] flex h-[577px] items-center justify-center px-[280px] py-[204px] relative shrink-0 w-[650px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col justify-between font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[01]</p>
      <p className="relative shrink-0 text-black w-full break-words">Работаем со сложной геометрией и тонкими деталями</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex flex-col h-[129px] items-start px-[12px] pt-[10px] pb-[10px] relative shrink-0 w-[310px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col justify-between font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[02]</p>
      <p className="relative shrink-0 text-black w-full break-words">Минимальный отход материала</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex flex-col h-[129px] items-start px-[12px] pt-[10px] pb-[10px] relative shrink-0 w-[310px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame55 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col justify-between font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[03]</p>
      <p className="relative shrink-0 text-black w-full break-words">Гладкий чистый рез без оплавлений</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="flex flex-col h-[129px] items-start px-[12px] pt-[10px] pb-[10px] relative shrink-0 w-[310px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame56 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col justify-between font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[04]</p>
      <p className="relative shrink-0 text-black w-full break-words">Возможность резки мелких деталей и тонких линий</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="flex flex-col h-[129px] items-start px-[12px] pt-[10px] pb-[10px] relative shrink-0 w-[310px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col justify-between font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
      <p className="relative shrink-0 text-[#9f9f9f] w-full">[05]</p>
      <p className="relative shrink-0 text-black w-full break-words">Срочное выполнение от 3 часов</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="flex flex-col h-full items-start px-[12px] pt-[10px] pb-[10px] relative w-full max-w-[653px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <Frame66 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full h-full">
      <div className="flex gap-[33px] items-start relative shrink-0">
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <Frame33 />
          <Frame63 />
        </div>
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <Frame34 />
          <Frame65 />
        </div>
      </div>
      <div className="flex items-stretch relative w-full flex-1 min-h-0">
        <Frame67 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex flex-col gap-[40px] items-start relative shrink-0 w-[653px] self-stretch">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Преимущества работы с нами</p>
      <div className="flex flex-col flex-1 min-h-0 relative shrink-0 w-full">
        <Frame38 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex gap-[30px] items-stretch relative shrink-0 max-w-[1333px]">
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full break-words">Листовой металл любой толщины</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full break-words">Резка листов до 20 мм для стали, до 15 мм для нержавейки, до 10 мм для алюминия</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full break-words">Сложные контуры и фигуры</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full break-words">
        Выполняем резку любой сложности: круги, овалы, многоугольники, декоративные узоры
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full break-words">Серийное производство</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full break-words">Точное повторение деталей в больших партиях с гарантией качества каждой единицы</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Виды работ по лазерной резке</p>
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Черная сталь</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Нержавеющая сталь</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Алюминий</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Оцинкованная сталь</p>
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
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Материалы</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">Мы работаем со всеми распространёнными типами металлов:</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Детали для машиностроения</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Элементы для металлоконструкций</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Заготовки для мебели</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Корпуса и панели оборудования</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Декоративные элементы</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Фланцы и прокладки</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Рекламные конструкции</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">Детали по индивидуальным чертежам</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Что мы изготавливаем</p>
      <Frame82 />
      <Frame87 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame88 />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Все детали проходят контроль точности и качества реза.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">Небольшие детали</p>
      <p className="relative shrink-0">Средние партии</p>
      <p className="relative shrink-0">Серийное производство</p>
      <p className="relative shrink-0">Срочный заказ</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">Тип заказа:</p>
      <Frame17 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">от 3–6 часов</p>
      <p className="relative shrink-0">1–2 дня</p>
      <p className="relative shrink-0">3–7 дней</p>
      <p className="relative shrink-0">от 1 часа (по согласованию)</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">Срок</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase whitespace-nowrap">Сроки выполнения</p>
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запросить расчет</p>
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
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Гарантия точности — повторяемость реза на 100%</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Гарантия сроков — если задерживаем, скидка 10%</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Гарантия качества — идеальные края, соответствие чертежу</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">Бесплатная доработка при отклонении от чертежа</p>
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
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Гарантии</p>
      <Frame103 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запрос или звонок</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/01</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Получение чертежа или создание по эскизу</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/02</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Расчет стоимости и сроков</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/03</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Подготовка материала и программирование</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/04</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Лазерная резка на станке</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/05</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Контроль качества, зачистка при необходимости</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/06</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">Выдача или доставка заказа</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[18px]" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">/07</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1333px]">
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
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black uppercase w-[min-content]">Этапы работы</p>
      <Frame29 />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <span>{`*Весь процесс прозрачен: `}</span>
        <span className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic text-[24px]">вы всегда понимаете</span>, на какой стадии находится проект.
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Сертификат</p>
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
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Наши сертификаты</p>
      <Frame39 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase whitespace-nowrap">Наши работы</p>
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

function Frame40({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <button
        onClick={onPrev}
        className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#e9e9e9] content-stretch flex items-center p-[18px] relative size-[60px] hover:bg-[#d0d0d0] transition-colors">
            <ArrowForwardIos />
          </div>
        </div>
      </button>
      <button
        onClick={onNext}
        className="bg-[#d9d9d9] content-stretch flex items-center p-[18px] relative shrink-0 size-[60px] hover:bg-[#c0c0c0] transition-colors cursor-pointer"
      >
        <ArrowForwardIos1 />
      </button>
    </div>
  );
}

function Frame41({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 min-w-[289px]">
      <Frame119 />
      <Frame40 onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
        </div>
      </div>
    </div>
  );
}

function Frame121({ sliderRef }: { sliderRef: React.RefObject<Slider> }) {
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame41 onPrev={handlePrev} onNext={handleNext} />
      <div className="flex-1 overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="px-[11px]">
              <Frame120 />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Frame122() {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full max-w-[1333px]">
      <Frame121 sliderRef={sliderRef} />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-white flex flex-col items-center justify-center left-[15px] px-[12px] py-[10px] z-10 bottom-[40px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">Алексей</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white flex flex-col items-center justify-center left-[430px] px-[12px] py-[10px] z-10 bottom-[40px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">Старший менеджер</p>
    </div>
  );
}


function Frame123() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[654px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">{`Фото менеджера `}</p>
          <Frame45 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Container({ value, onChange, error }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-white h-[62px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${error ? 'border-red-500' : 'border-[#d9d9d9]'}`} />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center p-[14px] relative size-full">
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Имя"
              required
              className={`font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[-2%] not-italic w-full text-[16px] bg-transparent outline-none placeholder:text-[#9f9f9f] ${error ? 'text-red-500' : 'text-black'}`}
            />
          </div>
        </div>
      </div>
      {error && (
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[-2%] not-italic relative shrink-0 text-[14px] text-red-500 px-[14px]">
          {error}
        </p>
      )}
    </div>
  );
}

function Container1({ value, onChange, error }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string }) {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative size-full">
          <input
            type="tel"
            value={value}
            onChange={onChange}
            placeholder="Телефон"
            required
            className={`font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[-2%] not-italic w-full text-[16px] bg-transparent outline-none placeholder:text-[#9f9f9f] ${error ? 'text-red-500' : 'text-black'}`}
          />
        </div>
      </div>
    </div>
  );
}

function Container2({ value, onChange, error }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[62px] items-start relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none ${error ? 'border-red-500' : 'border-[#d9d9d9]'}`} />
        <Container1 value={value} onChange={onChange} error={error} />
      </div>
      {error && (
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[-2%] not-italic relative shrink-0 text-[14px] text-red-500 px-[14px]">
          {error}
        </p>
      )}
    </div>
  );
}

function Container3({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div className="bg-white h-[151px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
          <textarea
            value={value}
            onChange={onChange}
            placeholder="Комментарии..."
            className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[-2%] not-italic w-full h-full text-[16px] text-black bg-transparent outline-none resize-none placeholder:text-[#9f9f9f]"
          />
        </div>
      </div>
    </div>
  );
}

function Frame47({ formData, setFormData, errors, handleNameChange, handlePhoneChange }: {
  formData: { name: string; phone: string; comments: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; comments: string }>>;
  errors: { name?: string; phone?: string };
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container
        value={formData.name}
        onChange={handleNameChange}
        error={errors.name}
      />
      <Container2
        value={formData.phone}
        onChange={handlePhoneChange}
        error={errors.phone}
      />
      <Container3
        value={formData.comments}
        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
      />
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

function Frame125({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        {isSubmitting ? "Отправка..." : "Отправить"}
      </p>
      {!isSubmitting && <Frame124 />}
    </button>
  );
}

function Frame48({ formData, setFormData, handleSubmit, errors, handleNameChange, handlePhoneChange, isSubmitting }: {
  formData: { name: string; phone: string; comments: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; comments: string }>>;
  handleSubmit: (e: FormEvent) => void;
  errors: { name?: string; phone?: string };
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}) {
  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[654px]">
      <Frame47
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <Frame125 isSubmitting={isSubmitting} />
    </form>
  );
}

function Frame49({ formData, setFormData, handleSubmit, errors, handleNameChange, handlePhoneChange, isSubmitting }: {
  formData: { name: string; phone: string; comments: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; comments: string }>>;
  handleSubmit: (e: FormEvent) => void;
  errors: { name?: string; phone?: string };
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="content-stretch flex items-start justify-between gap-[25px] relative shrink-0 w-full">
      <Frame123 />
      <Frame48
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errors={errors}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

function Frame50() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Валидация имени: минимум 2 символа, только буквы, пробелы и дефисы
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Имя обязательно для заполнения";
    }
    if (name.trim().length < 2) {
      return "Имя должно содержать минимум 2 символа";
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(name.trim())) {
      return "Имя может содержать только буквы, пробелы и дефисы";
    }
    return undefined;
  };

  // Валидация телефона: белорусский формат
  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Телефон обязателен для заполнения";
    }

    const trimmed = phone.trim();

    // Строгая проверка: только +375######### (13 символов) или 80######### (11 символов)
    // +375 + 9 цифр = 13 символов
    // 80 + 9 цифр = 11 символов

    if (trimmed.startsWith('+')) {
      // Если начинается с +, должно быть ровно 13 символов
      if (trimmed.length !== 13) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      // Проверяем, что это +375 и после него 9 цифр
      if (!/^\+375\d{9}$/.test(trimmed)) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      return undefined;
    } else if (trimmed.startsWith('80')) {
      // Проверяем, что после 80 идет ровно 9 цифр и общая длина 11
      if (trimmed.length !== 11) {
        return "Телефон должен быть в формате 80######### (ровно 11 символов)";
      }
      if (!/^80\d{9}$/.test(trimmed)) {
        return "Телефон должен быть в формате 80######### (ровно 11 символов)";
      }
      return undefined;
    } else {
      return "Телефон должен быть в формате +375######### или 80#########";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Валидация полей
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    const newErrors: { name?: string; phone?: string } = {};
    if (nameError) newErrors.name = nameError;
    if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);

    // Если есть ошибки, не отправляем форму
    if (nameError || phoneError) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Проверка конфигурации
      if (emailjsConfig.publicKey === "YOUR_PUBLIC_KEY" || !emailjsConfig.publicKey) {
        throw new Error("Public Key не настроен. Пожалуйста, настройте VITE_EMAILJS_PUBLIC_KEY в .env файле или в конфигурации.");
      }

      if (emailjsConfig.templateId === "YOUR_TEMPLATE_ID" || !emailjsConfig.templateId) {
        throw new Error("Template ID не настроен. Пожалуйста, настройте VITE_EMAILJS_TEMPLATE_ID в .env файле или в конфигурации.");
      }

      // Параметры для шаблона email
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.comments || "Комментарий не указан",
        to_email: emailjsConfig.toEmail,
      };

      console.log("Отправка email с параметрами:", {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKey: emailjsConfig.publicKey ? "установлен" : "не установлен",
        params: templateParams
      });

      // Отправка email (в версии 4.x publicKey передается как опция)
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      console.log("Email успешно отправлен:", response);

      // Успешная отправка
      alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
      setFormData({ name: "", phone: "", comments: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Ошибка отправки формы:", error);

      // Детальная информация об ошибке
      let errorMessage = "Произошла ошибка при отправке формы.";

      if (error?.text) {
        errorMessage += `\n\nДетали: ${error.text}`;
        console.error("Детали ошибки EmailJS:", error.text);
      } else if (error?.message) {
        errorMessage += `\n\n${error.message}`;
        console.error("Сообщение об ошибке:", error.message);
      } else if (error?.status) {
        errorMessage += `\n\nКод ошибки: ${error.status}`;
        console.error("Код ошибки:", error.status);
      }

      // Проверка конкретных ошибок
      if (error?.text?.includes("Invalid Public Key") || error?.text?.includes("public key")) {
        errorMessage = "Ошибка: Неверный Public Key. Проверьте настройки в EmailJS Dashboard.";
      } else if (error?.text?.includes("Service not found") || error?.text?.includes("service")) {
        errorMessage = "Ошибка: Service ID не найден. Проверьте правильность Service ID.";
      } else if (error?.text?.includes("Template not found") || error?.text?.includes("template")) {
        errorMessage = "Ошибка: Template ID не найден. Проверьте правильность Template ID.";
      }

      alert(errorMessage + "\n\nПожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Валидация при изменении полей (валидируем если уже есть ошибка или поле не пустое)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
    // Валидируем только если уже есть ошибка или пользователь начал вводить
    if (errors.name !== undefined || newName.length > 0) {
      const error = validateName(newName);
      setErrors({ ...errors, name: error });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setFormData({ ...formData, phone: newPhone });
    // Валидируем только если уже есть ошибка или пользователь начал вводить
    if (errors.phone !== undefined || newPhone.length > 0) {
      const error = validatePhone(newPhone);
      setErrors({ ...errors, phone: error });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Остались вопросы?</p>
      <Frame49
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errors={errors}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

function Frame62() {
  return (
    <div className="flex flex-col gap-[140px] items-start">
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

export default function LazernayaRezka() {
  return (
    <Layout>
      <Frame62 />
    </Layout>
  );
}
