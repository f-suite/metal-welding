import { SectionHeading } from "../shared";

export function PricingTableSection() {
  const widthPricing = [
    { width: "до 500 мм", price: "от 1,5" },
    { width: "до 1000 мм", price: "от 1,9" },
    { width: "до 1500 мм", price: "от 2,3" },
    { width: "до 2000 мм", price: "от 2,7" },
    { width: "до 2500 мм", price: "от 3,1" },
  ];

  const thicknessLimits = [
    { thickness: "1", maxLength: "до 2500" },
    { thickness: "1,5", maxLength: "до 2500" },
    { thickness: "2", maxLength: "до 2500" },
    { thickness: "2,5", maxLength: "до 2000" },
    { thickness: "3", maxLength: "до 1500" },
    { thickness: "4", maxLength: "до 1000" },
    { thickness: "5", maxLength: "до 500" },
    { thickness: "6", maxLength: "до 500" },
  ];

  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full">
      <SectionHeading text="Прайс-лист" />

      <div className="content-stretch flex flex-col gap-8 items-start relative w-full">
        {/* Стоимость гиба по ширине */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-medium leading-[130%] tracking-[0%] not-italic text-lg sm:text-xl md:text-[24px] text-black">
            Стоимость одного гиба
          </h3>
          <div className="overflow-x-auto w-full">
            <table className="w-full md:w-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black">
                    Ширина гиба
                  </th>
                  <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black">
                    Стоимость, BYN
                  </th>
                </tr>
              </thead>
              <tbody>
                {widthPricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {item.width}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Максимальная длина гиба по толщине */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-medium leading-[130%] tracking-[0%] not-italic text-lg sm:text-xl md:text-[24px] text-black">
            Максимальная длина гиба относительно толщины металла
          </h3>
          <div className="overflow-x-auto w-full">
            <table className="w-full md:w-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black">
                    Толщина, мм
                  </th>
                  <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black">
                    Макс. длина гиба, мм
                  </th>
                </tr>
              </thead>
              <tbody>
                {thicknessLimits.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {item.thickness}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {item.maxLength}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
