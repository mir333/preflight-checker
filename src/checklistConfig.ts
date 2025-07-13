import preflight from "./checklists/preflight.json";
import preflight_cs from "./checklists/preflight.cs.json";
import daily_startup from "./checklists/daily_startup.json";
import daily_startup_cs from "./checklists/daily_startup.cs.json";
import { useLocale } from "./components/LocaleProvider";

const CHECKLIST_FILES = {
  cs: [preflight_cs, daily_startup_cs],
  en: [preflight, daily_startup]
};

export function useChecklistsForLocale() {
  const { locale } = useLocale();
  return CHECKLIST_FILES[locale as keyof typeof CHECKLIST_FILES] || CHECKLIST_FILES.en;
}
