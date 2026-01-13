import { createContext, useContext, ReactNode } from "react";

interface PageContentContextType {
  content: any;
}

const PageContentContext = createContext<PageContentContextType | undefined>(undefined);

export function PageContentProvider({ content, children }: { content: any; children: ReactNode }) {
  return (
    <PageContentContext.Provider value={{ content }}>
      {children}
    </PageContentContext.Provider>
  );
}

export function usePageContent() {
  const context = useContext(PageContentContext);
  if (!context) {
    throw new Error("usePageContent must be used within PageContentProvider");
  }
  return context.content;
}
