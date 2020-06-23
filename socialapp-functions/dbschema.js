let db = {
    users: [
        {
            userId: '1LcYjbzLJDNwCkS5pKbJanqUq4E3',
            email: 'new2@email.com',
            handle: 'user',
            createdAt: '2019-10-18T18:22:57.962Z',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialapp-6f6ba.appspot.com/o/12067791762.jpg?alt=media',
            bio: 'Hello im user',
            website: 'https://google.com',
            location: 'Los angeles'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'This is a sample sream',
            createdAt: '2019-10-18T18:22:57.962Z',
            likeCount: 5,
            commentCount: 3
            
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'RnEZyKK7sKB58yQlsODV',
            body: 'whats up',
            createdAt: '2019-10-18T18:22:57.962Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'RnEZyKK7sKB58yQlsODV',
            type: 'like | comment',
            createdAt: '2019-10-18T18:22:57.962Z'
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: '1LcYjbzLJDNwCkS5pKbJanqUq4E3',
        email: 'new2@email.com',
        handle: 'user',
        createdAt: '2019-10-18T18:22:57.962Z',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialapp-6f6ba.appspot.com/o/12067791762.jpg?alt=media',
        bio: 'Hello im user',
        website: 'https://google.com',
        location: 'Los angeles'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'NbdJ7pgXmXG7hgaWvy84'
        },
        {
            userHandle: 'user',
            screamId: 'Ffq85LD8ZxRA2weQ5SC6'
        }
    ]
};