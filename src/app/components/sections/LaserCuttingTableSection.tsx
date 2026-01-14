import { SectionHeading } from "../shared";

interface MaterialGroup {
  name: string;
  rows: {
    thickness: string;
    pricePerMeter: string;
    minPrice: string;
  }[];
}

export function LaserCuttingTableSection() {
  const materialGroups: MaterialGroup[] = [
    {
      name: "Углеродистая сталь",
      rows: [
        { thickness: "0,3", pricePerMeter: "1", minPrice: "0,13" },
        { thickness: "0,5", pricePerMeter: "1,02", minPrice: "0,132" },
        { thickness: "1", pricePerMeter: "1,14", minPrice: "0,14" },
        { thickness: "1,2", pricePerMeter: "1,23", minPrice: "0,145" },
        { thickness: "1,5", pricePerMeter: "1,23", minPrice: "0,165" },
        { thickness: "2", pricePerMeter: "1,41", minPrice: "0,165" },
        { thickness: "2,5", pricePerMeter: "1,77", minPrice: "0,165" },
        { thickness: "3", pricePerMeter: "1,92", minPrice: "0,21" },
        { thickness: "4", pricePerMeter: "2,34", minPrice: "0,21" },
        { thickness: "5", pricePerMeter: "3,7", minPrice: "0,24" },
        { thickness: "6", pricePerMeter: "4,65", minPrice: "0,27" },
        { thickness: "7", pricePerMeter: "5,37", minPrice: "0,3" },
        { thickness: "8", pricePerMeter: "6,24", minPrice: "0,33" },
        { thickness: "10", pricePerMeter: "8,4", minPrice: "0,42" },
        { thickness: "12", pricePerMeter: "13,7", minPrice: "0,57" },
        { thickness: "14", pricePerMeter: "17", minPrice: "0,63" },
      ],
    },
    {
      name: "Нержавеющая сталь",
      rows: [
        { thickness: "0,3", pricePerMeter: "1,42", minPrice: "0,21" },
        { thickness: "0,5", pricePerMeter: "1,55", minPrice: "0,21" },
        { thickness: "1", pricePerMeter: "1,7", minPrice: "0,22" },
        { thickness: "1,5", pricePerMeter: "2,25", minPrice: "0,22" },
        { thickness: "2", pricePerMeter: "3,23", minPrice: "0,23" },
        { thickness: "3", pricePerMeter: "5,5", minPrice: "0,24" },
        { thickness: "4", pricePerMeter: "15", minPrice: "0,3" },
      ],
    },
    {
      name: "Оцинк сталь",
      rows: [
        { thickness: "0,8", pricePerMeter: "1,8097625", minPrice: "0,23" },
        { thickness: "1", pricePerMeter: "2,1645", minPrice: "0,24" },
        { thickness: "1,5", pricePerMeter: "2,7356875", minPrice: "0,27" },
        { thickness: "2", pricePerMeter: "3,72775", minPrice: "0,3" },
      ],
    },
    {
      name: "Алюминий",
      rows: [
        { thickness: "1", pricePerMeter: "0,613275", minPrice: "0,165" },
        { thickness: "2", pricePerMeter: "1,21693", minPrice: "0,21" },
        { thickness: "3", pricePerMeter: "2,11159", minPrice: "0,21" },
        { thickness: "4", pricePerMeter: "5,4834", minPrice: "0,24" },
        { thickness: "5", pricePerMeter: "8,34535", minPrice: "0,27" },
        { thickness: "6", pricePerMeter: "12,44828", minPrice: "0,3" },
      ],
    },
    {
      name: "Латунь",
      rows: [
        { thickness: "1", pricePerMeter: "2,35209", minPrice: "0,27" },
        { thickness: "2", pricePerMeter: "4,56469", minPrice: "0,3" },
        { thickness: "3", pricePerMeter: "8,19624", minPrice: "0,33" },
      ],
    },
    {
      name: "Медь",
      rows: [
        { thickness: "1", pricePerMeter: "2,93891", minPrice: "0,293891" },
        { thickness: "2", pricePerMeter: "6,31072", minPrice: "0,631072" },
        { thickness: "3", pricePerMeter: "11,60172", minPrice: "1,160172" },
      ],
    },
    {
      name: "Титан",
      rows: [
        { thickness: "1", pricePerMeter: "3,73737", minPrice: "0,373737" },
        { thickness: "2", pricePerMeter: "8,18662", minPrice: "0,818662" },
        { thickness: "3", pricePerMeter: "16,2097", minPrice: "1,62097" },
      ],
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full">
      <SectionHeading text="Прайс-лист" />

      <div className="content-stretch flex flex-col gap-4 items-start relative w-full">
        <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic text-lg sm:text-xl md:text-[24px] text-black">
          Стоимость лазерной резки металла
        </p>
        <div className="overflow-x-auto w-full">
          <table className="w-full md:w-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black whitespace-nowrap">
                  Материал
                </th>
                <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black whitespace-nowrap">
                  Толщина, мм
                </th>
                <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black whitespace-nowrap">
                  Цена за м.п., BYN
                </th>
                <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-left font-medium text-sm sm:text-base md:text-lg text-black whitespace-nowrap">
                  Мин. стоимость, BYN
                </th>
              </tr>
            </thead>
            <tbody>
              {materialGroups.map((group, groupIndex) => (
                group.rows.map((row, rowIndex) => (
                  <tr key={`${groupIndex}-${rowIndex}`} className="hover:bg-gray-50">
                    {rowIndex === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black align-middle font-medium"
                      >
                        {group.name}
                      </td>
                    )}
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {row.thickness}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {row.pricePerMeter}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-2.5 text-sm sm:text-base md:text-lg text-black">
                      {row.minPrice}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
