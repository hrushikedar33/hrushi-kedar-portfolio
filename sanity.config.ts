import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas/index';
import { visionTool } from '@sanity/vision';
import { markdownSchema } from 'sanity-plugin-markdown';

const config = defineConfig({
    title: 'hrushikedar-portfolio',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-12-26',
    basePath: '/admin',
    plugins: isDev
        ? [deskTool(), visionTool(), markdownSchema()]
        : [deskTool(), markdownSchema()],
    schema: { types: schemaTypes },
});

export default config;
