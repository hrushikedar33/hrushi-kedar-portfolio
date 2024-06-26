const homePage = {
    name: 'homePage',
    title: 'HomePage',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'logoImage',
            title: 'LogoImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'backgroundInformation',
            title: 'BackgroundInformation',
            type: 'text',
        },
        {
            name: 'profilePic',
            title: 'ProfilePic',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'resumeURL',
            title: 'ResumeURL',
            type: 'url',
        },
        {
            name: 'phoneNumber',
            title: 'PhoneNumber',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'social',
            title: 'Social',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'social' } }],
        },
    ],
};

export default homePage;
