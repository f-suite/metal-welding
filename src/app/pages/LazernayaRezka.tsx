import { useRef, useState, FormEvent } from "react";
import Slider from "react-slick";
import emailjs from "@emailjs/browser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";
import { emailjsConfig } from "../../config/emailjs.config";
import svgPaths from "../../imports/svg-mj3zdjuk7f";
import { Header } from "../components/Header";

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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">{`Профессиональная лазерная резка металла. Точная геометрия, идеальные края и быстрые сроки — от 1 часа. Работаем как с единичными деталями, так и с серией. Берёмся за сложные контуры, тонкие элементы и аккуратные фаски там, где другие отказывают`}</p>
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
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black text-nowrap uppercase">
        <p className="mb-0 font-bold">{`Лазерная резка — `}</p>
        <p className="font-bold">профессиональные услуги под ключ</p>
      </div>
      <Frame12 />
    </div>
  );
}

function AdvantageCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col gap-[12px] items-start p-[16px] h-full">
      <div className="flex items-center justify-center shrink-0 size-[46px] text-black">
        {icon}
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic text-[14px] text-black w-full break-words">{text}</p>
    </div>
  );
}

function Frame54() {
  const advantages = [
    { text: "Высокая точность до ±0,05 мм", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Гладкий чистый рез — без искривлений, заусенцев и термодеформаций", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Быстрое изготовление — от 1 дня, срочно — от 3 часов", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Работа со сложной геометрией", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Минимальный отход материала", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Возможность мелких деталей и тонких линий", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
    { text: "Резка по чертежам: DXF, DWG", icon: <div className="bg-[#d9d9d9] size-[46px]" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full items-stretch justify-items-start">
      {advantages.map((advantage, index) => (
        <AdvantageCard key={index} icon={advantage.icon} text={advantage.text} />
      ))}
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Преимущества лазерной резки</p>
      <Frame54 />
    </div>
  );
}


function Frame132() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Сталь (черная, оцинкованная)</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Нержавеющая сталь</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Алюминий</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Латунь, медь</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame132 />
      <Frame133 />
      <Frame134 />
      <Frame135 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[22px] items-start p-[30px] relative w-full">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Материалы, с которыми работаем</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">Металлы:</p>
          <Frame136 />
        </div>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Оборудование</p>
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">Оптоволоконный лазерный станок RT3015A, Rauti</p>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">- стабильная мощность на высоких скоростях</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">- аккуратная кромка без оплавлений</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">- ровная геометрия даже на малых деталях</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">- минимальный расход материала</p>
      </div>
    </div>
  );
}



function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">Небольшие изделия</p>
      <p className="relative shrink-0">Средние партии</p>
      <p className="relative shrink-0">Серийное производство</p>
      <p className="relative shrink-0">Срочный заказ</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">Задача</p>
      <Frame17 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
      <p className="relative shrink-0">от 3–6 часов</p>
      <p className="relative shrink-0">1–2 дня</p>
      <p className="relative shrink-0">от 3–7 дней</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Гарантия точности — повторяемость реза на 100%</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Гарантия сроков — если задерживаем, скидка 10%</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Гарантия качества — идеальные края, соответствие чертежу</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
      <Frame100 />
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Заявка / звонок</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Получение чертежа</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Расчёт стоимости</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запуск в производство</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Контроль качества</p>
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Выдача заказа / доставка</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[18px]" />
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

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1333px]">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
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

function Frame127() {
  return (
    <div className="absolute bg-white flex flex-col items-center justify-center left-[15px] px-[12px] py-[10px] z-10 bottom-[80px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">+375 (XX) XXX-XX-XX</p>
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
          <Frame127 />
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

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Телефон обязателен для заполнения";
    }
    
    const trimmed = phone.trim();
    
    if (trimmed.startsWith('+')) {
      if (trimmed.length !== 13) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      if (!/^\+375\d{9}$/.test(trimmed)) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      return undefined;
    } else if (trimmed.startsWith('80')) {
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
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    const newErrors: { name?: string; phone?: string } = {};
    if (nameError) newErrors.name = nameError;
    if (phoneError) newErrors.phone = phoneError;
    
    setErrors(newErrors);
    
    if (nameError || phoneError) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (emailjsConfig.publicKey === "YOUR_PUBLIC_KEY" || !emailjsConfig.publicKey) {
        throw new Error("Public Key не настроен. Пожалуйста, настройте VITE_EMAILJS_PUBLIC_KEY в .env файле или в конфигурации.");
      }
      
      if (emailjsConfig.templateId === "YOUR_TEMPLATE_ID" || !emailjsConfig.templateId) {
        throw new Error("Template ID не настроен. Пожалуйста, настройте VITE_EMAILJS_TEMPLATE_ID в .env файле или в конфигурации.");
      }
      
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.comments || "Комментарий не указан",
        to_email: emailjsConfig.toEmail,
      };
      
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        {
          publicKey: emailjsConfig.publicKey,
        }
      );
      
      alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
      setFormData({ name: "", phone: "", comments: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Ошибка отправки формы:", error);
      let errorMessage = "Произошла ошибка при отправке формы.";
      
      if (error?.text) {
        errorMessage += `\n\nДетали: ${error.text}`;
      } else if (error?.message) {
        errorMessage += `\n\n${error.message}`;
      }
      
      alert(errorMessage + "\n\nПожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
    if (errors.name !== undefined || newName.length > 0) {
      const error = validateName(newName);
      setErrors({ ...errors, name: error });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setFormData({ ...formData, phone: newPhone });
    if (errors.phone !== undefined || newPhone.length > 0) {
      const error = validatePhone(newPhone);
      setErrors({ ...errors, phone: error });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Остались вопросы?</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black">Менеджер Алексей — старший менеджер компании.</p>
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

function Frame138() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Наши цены</p>
      <div className="bg-[#d9d9d9] h-[400px] w-full flex items-center justify-center">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[24px] text-black">Таблица цен (отдельный файл)</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">FAQ — Частые вопросы клиентов</p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black w-full">Можно ли привезти свой материал?</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Да, работаем с материалами заказчика.</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black w-full">Какие форматы файлов принимаете?</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">DXF, DWG</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black w-full">Есть ли минимальный заказ?</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Минимум — 200 РУБ.</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black w-full">Делаете доставку?</p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">Да, по городу и РБ транспортными компаниями.</p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="flex flex-col gap-[140px] items-start">
      <Frame61 />
      <Frame13 />
      <Frame51 />
      <Frame137 />
      <Frame97 />
      <Frame138 />
      <Frame104 />
      <Frame30 />
      <Frame118 />
      <Frame122 />
      <Frame139 />
      <Frame50 />
    </div>
  );
}

export default function LazernayaRezka() {
  return (
    <div className="bg-white relative size-full" data-name="Лазерная резка">
      <div className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        <Frame62 />
        <p className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[40px] text-black text-nowrap uppercase mt-[98px] mb-[45px] text-center">ФУТЕР</p>
      </div>
      <Header />
    </div>
  );
}

