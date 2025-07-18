import {createFileRoute, useParams} from "@tanstack/react-router";
import ChecklistView from "../components/ChecklistView";
import { useChecklistsForLocale} from "@/checklistConfig.ts";

export const Route = createFileRoute("/checklist/$id")({
  component: ChecklistRoute,
});

export default function ChecklistRoute() {
  const { id } = useParams({ from: "/checklist/$id" });

  const checklists = useChecklistsForLocale();

  const checklist = checklists.find((cl) => cl.id === id);

  if (!checklist)
    return <div className="flex justify-center items-center min-h-[60vh] w-full"><span>Checklist not found.</span></div>;
  return <ChecklistView checklist={checklist} />;
}
