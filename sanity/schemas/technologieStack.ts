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
            of: [{ type: 'string' }],
        },
        {
            name: 'frameworks',
            title: 'Frameworks',
            description: 'Frameworks/ Libraries',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'databases',
            title: 'Databases',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};

export default technologieStack;
