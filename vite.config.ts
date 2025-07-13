import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import mkcert from 'vite-plugin-mkcert'
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
		mkcert(),
		VitePWA({
			manifestFilename: "manifest.json",
			includeAssets: ['favicon.ico', 'images/icon-192x192.png', 'images/icon-512x512.png', 'mask.svg'],
			registerType: "autoUpdate",
			manifest: {
				name: "Preflight checker",
				short_name: "Preflight checker",
				"start_url": "/",
				"display": "standalone",
				"theme_color": "#000000",
				"background_color": "#ffffff",
				"icons": [
					{
						"src": "favicon.ico",
						"sizes": "32x32",
						"type": "image/x-icon"
					},
					{
						"src": "images/icon-192x192.png",
						"type": "image/png",
						"sizes": "192x192"
					},
					{
						"src": "images/icon-512x512.png",
						"type": "image/png",
						"sizes": "512x512"
					}
				],
				"screenshots": [
					{
						"src": "images/screenshot-wide.png",
						"sizes": "1280x720",
						"type": "image/png",
						"form_factor": "wide"
					},
					{
						"src": "images/screenshot-mobile.png",
						"sizes": "375x667",
						"type": "image/png",
						"form_factor": "narrow"
					}
				]
			},
			workbox: {
				// defining cached files formats
				globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
			},
		})
	],
	server: {
		allowedHosts: true,
		host: "0.0.0.0",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},

	build: {
		sourcemap: true,
	},
});
