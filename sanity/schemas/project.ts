const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            description: 'Order of the project (lower numbers appear first)',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(0),
        },
        {
            name: 'title',
            title: 'Title',
            description: 'Title of the project',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'linkToBuild',
            title: 'LinkToBuild',
            type: 'url',
        },
        {
            name: 'linkToLaunch',
            title: 'LinkToLaunch',
            type: 'url',
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};

export default project;
