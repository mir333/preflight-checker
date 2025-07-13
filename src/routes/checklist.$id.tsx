import {createFileRoute, useParams} from "@tanstack/react-router";
import { useChecklists } from "../hooks/useChecklists";
import ChecklistView from "../components/ChecklistView";

export const Route = createFileRoute("/checklist/$id")({
  component: ChecklistRoute,
});

export default function ChecklistRoute() {
  const { id } = useParams({ from: "/checklist/$id" });

  const { checklists, loading, error } = useChecklists();

  if (loading)
    return <div className="flex justify-center items-center min-h-[60vh] w-full"><span>Loading checklist...</span></div>;
  if (error)
    return <div className="flex justify-center items-center min-h-[60vh] w-full"><span>Error: {error}</span></div>;

  const checklist = checklists.find((cl) => cl.id === id);

  if (!checklist)
    return <div className="flex justify-center items-center min-h-[60vh] w-full"><span>Checklist not found.</span></div>;
  return <ChecklistView checklist={checklist} />;
}
