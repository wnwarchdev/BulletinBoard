export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Item 1',
        text: 'Text 1',
        created: 'Date 1',
        author: 'Author 1',
        price: 1,
        phone: '111-111-111',
        email: '111@gmail.com',
        photo: '',
      },
      {
        id: '2',
        title: 'Item 2',
        text: 'Text 2',
        created: 'Date 2',
        author: 'Author 2',
        price: 2,
        phone: '222-222-222',
        email: '222@gmail.com',
        photo: '',
      },
      {
        id: '3',
        title: 'Item 3',
        text: 'Text 3',
        created: 'Date 3',
        author: 'Author 3',
        price: 3,
        phone: '333-333-333',
        email: '333@gmail.com',
        photo: '',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
