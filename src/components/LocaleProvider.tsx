import { createContext, useContext, useState, type ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { messages } from "../locales/messages";

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: 'en' | 'cs') => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<'en' | 'cs'>('en');
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
