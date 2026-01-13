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
      <main className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
