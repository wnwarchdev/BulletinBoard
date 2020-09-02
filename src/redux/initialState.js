export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Dog Walking',
        text: 'Hi, I can offer an evening walk to your dog (Mon-Fri), or anytime during weekend. I can take up to 3 dogs at once. Price is per week, with one walk per day maximum. Cheers',
        created: '2020-08-28',
        author: 'Amanda Doe',
        price: 10,
        phone: '111-111-111',
        email: 'amanda@doe.com',
        photo: '',
        userIdStamp: 'abc',
      },
      {
        id: '2',
        title: 'Man with a van',
        text: 'Hello folks, I offer to help you with moving houses within area; I have a large van that should carry all your stuff at once. I can also provide help with moving furniture directly to the apartament, please contact me for more details. Hire is $20 + $3 per kilometer',
        created: '2020-08-29',
        author: 'Andy Candy',
        price: 20,
        phone: '222-222-222',
        email: 'andy@candy.com',
        photo: '',
        userIdStamp: 'xyz',
      },
      {
        id: '3',
        title: 'Used cupboard',
        text: 'Almost new white Ikea cupboard (over $50 at store!!!), up for grabs, collection only. Area of NW1-0DP',
        created: '2020-08-29',
        author: 'esme',
        price: 30,
        phone: '333-333-333',
        email: 'esme@gmail.com',
        photo: '',
        userIdStamp: 'abc',
      },
      {
        id: '4',
        title: 'Planters for free',
        text: '10+ various sized ceramic planters are looking for new garden, pickup anyday before 15',
        created: '2020-08-30',
        author: 'Granny Smith',
        price: 0,
        phone: '444-444-444',
        email: '',
        photo: '',
        userIdStamp: 'def',
      },
      {
        id: '5',
        title: 'Guitar lessons',
        text: 'Hola! I am happy to teach you guitar! Beginners and intermediate welcome; I can rent instrument free of charge. Lessons at your house! Any music style. Taught by professional. Price is per hour.',
        created: '2020-08-31',
        author: 'Fabrizio',
        price: 8,
        phone: '555-555-555',
        email: 'fbrzio@gmail.com',
        photo: '',
        userIdStamp: 'abc',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  //logged: true, //user logged or not?
  user: {
    userId: 'abc',
    logged: true,
    admin: false,
  },
};
