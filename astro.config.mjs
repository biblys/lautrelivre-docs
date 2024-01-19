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
					label: 'Guide adhérent',
					items: [
						{
							label: 'Mode d\'emploi du site',
							link: '/adherent/mode-d-emploi-du-site/'
						},
						{
							label: 'Fiche éditeur',
							link: '/adherent/fiche-editeur/'
						},
						{
							label: 'Ajouter un livre',
							link: '/adherent/ajouter-un-livre/'
						},
						{
							label: 'Catalogue',
							link: '/adherent/catalogue/'
						},
						{
							label: 'Billets',
							link: '/adherent/billets/'
						},
						{
							label: 'Évènements',
							link: '/adherent/evenements/'
						},
						{
							label: 'Dédicaces',
							link: '/adherent/dedicaces/'
						},
						{
							label: 'Vente par correspondance',
							link: '/adherent/vente-par-correspondance/'
						}
					]
				},
				{
					label: 'Administration',
					autogenerate: { directory: 'admin' },
				},
			],
		}),
	],
});
