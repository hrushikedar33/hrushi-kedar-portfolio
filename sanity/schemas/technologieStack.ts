const technologieStack = {
    name: 'technologieStack',
    title: 'TechnologieStack',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of stack',
            type: 'string',
        },
        {
            name: 'languages',
            title: 'Languages Used',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'frameworks',
            title: 'Frameworks',
            description: 'Frameworks/ Libraries',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'databases',
            title: 'Databases',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
    ],
};

export default technologieStack;
