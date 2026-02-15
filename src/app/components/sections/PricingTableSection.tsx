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

      <div className="content-stretch flex flex-col lg:flex-row gap-4 lg:gap-8 items-start relative w-full">
        {/* Table 1: Width Pricing */}
        <div className="overflow-x-auto w-full lg:w-auto">
          <table className="w-full max-w-[400px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th colSpan={2} className="px-2 py-3 md:px-4 md:py-3.5 text-center font-bold text-sm md:text-lg text-gray-900">
                  Стоимость гибки по ширине
                </th>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-1.5 py-2 md:px-3 md:py-2.5 text-left font-semibold text-xs md:text-base text-gray-800 border-r border-gray-300 break-words">
                  Ширина гиба
                </th>
                <th className="px-1.5 py-2 md:px-3 md:py-2.5 text-left font-semibold text-xs md:text-base text-gray-800 break-words">
                  Стоимость, BYN
                </th>
              </tr>
            </thead>
            <tbody>
              {widthPricing.map((item, index) => (
                <tr key={index} className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'} hover:bg-blue-50/50 border-b border-gray-300`}>
                  <td className="px-1.5 py-1.5 md:px-3 md:py-2 text-xs md:text-base text-gray-700 border-r border-gray-300 whitespace-nowrap">
                    {item.width}
                  </td>
                  <td className="px-1.5 py-1.5 md:px-3 md:py-2 text-xs md:text-base text-gray-700 font-medium whitespace-nowrap">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2: Thickness Limits */}
        <div className="overflow-x-auto w-full lg:w-auto">
          <table className="w-full max-w-[400px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th colSpan={2} className="px-2 py-3 md:px-4 md:py-3.5 text-center font-bold text-sm md:text-lg text-gray-900">
                  Максимальная длина гиба
                </th>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-1.5 py-2 md:px-3 md:py-2.5 text-left font-semibold text-xs md:text-base text-gray-800 border-r border-gray-300 break-words">
                  Толщина, мм
                </th>
                <th className="px-1.5 py-2 md:px-3 md:py-2.5 text-left font-semibold text-xs md:text-base text-gray-800 break-words">
                  Макс. длина, мм
                </th>
              </tr>
            </thead>
            <tbody>
              {thicknessLimits.map((item, index) => (
                <tr key={index} className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'} hover:bg-blue-50/50 border-b border-gray-300`}>
                  <td className="px-1.5 py-1.5 md:px-3 md:py-2 text-xs md:text-base text-gray-700 border-r border-gray-300 whitespace-nowrap">
                    {item.thickness}
                  </td>
                  <td className="px-1.5 py-1.5 md:px-3 md:py-2 text-xs md:text-base text-gray-700 font-medium whitespace-nowrap">
                    {item.maxLength}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
