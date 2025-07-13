import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />

			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
	notFoundComponent: () => (
		<div className="flex justify-center items-center min-h-[60vh] w-full text-xl text-red-600">
			404 – Page Not Found
		</div>
	),
});
