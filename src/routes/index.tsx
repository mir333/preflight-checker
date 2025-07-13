import {createFileRoute, useNavigate} from "@tanstack/react-router";
import {useChecklistsForLocale} from "@/checklistConfig.ts";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {

  const navigate = useNavigate();
  const checklists = useChecklistsForLocale();

  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-6 flex-wrap justify-center mt-10 ">
        {checklists.map((cl) => (
          <div
            key={cl.id}
            className="shadow-md rounded-xl p-6 min-w-[240px] bg-white cursor-pointer transition-shadow hover:shadow-lg"
            onClick={() => navigate({to: `/checklist/${cl.id}`})}
          >
            <h2 className="m-0 text-xl font-semibold">{cl.title}</h2>
            {cl.description && <p className="text-gray-600 mt-2">{cl.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
