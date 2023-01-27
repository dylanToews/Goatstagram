import { USERS } from "./users";

export const POSTS = [
  {
    imageURL: 'https://i.ytimg.com/vi/62PmbTJDnus/maxresdefault.jpg',
    user: USERS[0].user,
    likes: 436,
    caption: 'living the viva Goata',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'thegoatman',
        comment: 'real deadly goatman'
      },
      {
      user: 'goat4reel',
      comment: 'goat4real4lyfe'
      }
    ]
  },
  {
    imageURL: 'https://i.pinimg.com/originals/57/0c/e2/570ce2de8af53b9a69bd5d76e2be84c5.jpg',
    user: USERS[1].user,
    likes: 3336,
    caption: 'GOAT',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'thegoatman',
        comment: 'real deadly goatman'
      },

    ]
  },

]