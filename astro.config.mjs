import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'L\'Autre Livre',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			editLink: {
				baseUrl: 'https://github.com/biblys/lautrelivre-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Administration',
					autogenerate: { directory: 'admin' },
				},
			],
		}),
	],
});
