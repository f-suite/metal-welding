import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout компонент - единая обертка для всех страниц
 * Содержит общий Header и Footer
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white relative size-full">
      <Header />
      <main className="w-full max-w-[1385px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[26px] py-5 sm:py-6 md:py-[26px] pt-20 sm:pt-24 md:pt-28 lg:pt-[124px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
