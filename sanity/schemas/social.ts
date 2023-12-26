const social = {
    name: 'social',
    title: 'Social',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of the social media',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
            validation: (Rule: any) =>
                Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                }),
        },
    ],
};

export default social;
