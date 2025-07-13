import {createFileRoute} from "@tanstack/react-router";
import {useNavigate} from "@tanstack/react-router";
import {CHECKLIST_FILES} from "@/checklistConfig.ts";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {

	const navigate = useNavigate();

	return (
		<div className="flex gap-6 flex-wrap justify-center mt-10">
			{CHECKLIST_FILES.map((cl) => (
				<div
					key={cl.id}
					className="shadow-md rounded-xl p-6 min-w-[240px] bg-white cursor-pointer transition-shadow hover:shadow-lg"
					onClick={() => navigate({to: `/checklist/${cl.id}`})}
				>
					<h2 className="m-0 text-xl font-semibold">{cl.title}</h2>
					<p className="text-gray-600 mt-2">{cl.description}</p>
				</div>
			))}
		</div>
	);
}
