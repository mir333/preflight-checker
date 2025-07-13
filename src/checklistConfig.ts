import pre_kabina from "./checklists/pre_kabina.cs.json";
import pre_kabina_en from "./checklists/pre_kabina.en.json";
import spousteni_motoru_cold from "./checklists/spousteni_motoru_cold.cs.json";
import spousteni_motoru_cold_en from "./checklists/spousteni_motoru_cold.en.json";
import spousteni_motoru_warm from "./checklists/spousteni_motoru_warm.cs.json";
import spousteni_motoru_warm_en from "./checklists/spousteni_motoru_warm.en.json";
import { useLocale } from "./components/LocaleProvider";

const CHECKLIST_FILES = {
  cs: [ pre_kabina, spousteni_motoru_cold, spousteni_motoru_warm],
  en: [ pre_kabina_en, spousteni_motoru_cold_en, spousteni_motoru_warm_en]
};

export function useChecklistsForLocale() {
  const { locale } = useLocale();
  return CHECKLIST_FILES[locale as keyof typeof CHECKLIST_FILES] || CHECKLIST_FILES.en;
}
