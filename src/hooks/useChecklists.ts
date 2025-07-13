import { useEffect, useState } from "react";
import { CHECKLIST_FILES } from "../checklistConfig";
import { type Checklist } from "../types.d";

export function useChecklists() {
  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChecklists() {
      try {
        const results = await Promise.all(
          CHECKLIST_FILES.map(async (file) => {
            const res = await fetch(`/checklists/${file}`);
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return await res.json() as Promise<Checklist>;
          })
        );
        setChecklists(results);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchChecklists();
  }, []);

  return { checklists, loading, error };
}
