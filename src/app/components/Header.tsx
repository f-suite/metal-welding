import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <div className="absolute top-[20px] left-0 right-0 flex items-center justify-center z-50">
      <nav className="flex gap-[40px] items-center flex-wrap justify-center">
        <Link
          to="/"
          className={`font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[20px] text-black uppercase transition-opacity hover:opacity-70 ${
            location.pathname === "/" ? "opacity-100" : "opacity-60"
          }`}
        >
          Сварка металла
        </Link>
        <Link
          to="/proizvodstvo-metallokonstrukcij"
          className={`font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[20px] text-black uppercase transition-opacity hover:opacity-70 ${
            location.pathname === "/proizvodstvo-metallokonstrukcij" ? "opacity-100" : "opacity-60"
          }`}
        >
          Производство металлоконструкций
        </Link>
        <Link
          to="/lazernaya-rezka"
          className={`font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[20px] text-black uppercase transition-opacity hover:opacity-70 ${
            location.pathname === "/lazernaya-rezka" ? "opacity-100" : "opacity-60"
          }`}
        >
          Лазерная резка
        </Link>
        <Link
          to="/gibka-metalla"
          className={`font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[20px] text-black uppercase transition-opacity hover:opacity-70 ${
            location.pathname === "/gibka-metalla" ? "opacity-100" : "opacity-60"
          }`}
        >
          Гибка металла
        </Link>
      </nav>
    </div>
  );
}

