const experiance = {
    name: 'experiance',
    title: 'Experiance',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            description: 'Order of the experience (lower numbers appear first)',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(0),
        },
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string',
        },
        {
            name: 'companyImage',
            title: 'CompanyImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'companyUrl',
            title: 'CompanyUrl',
            type: 'url',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date',
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date',
        },
        {
            name: 'isCurrentlyWorking',
            title: 'IsCurrentlyWorking',
            type: 'boolean',
        },
        {
            name: 'jobLocation',
            title: 'JobLocation',
            type: 'string',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'markdown',
        },
    ],
};

export default experiance;
