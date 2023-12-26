import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas/index';

const config = defineConfig({
    title: 'hrushikedar-portfolio',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-12-26',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemaTypes },
});

export default config;
