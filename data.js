import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const tweetsData = [   
    {
        handle: `@Birongui 💎`,
        profilePic: `images/bilaface1.png`,
        likes: 27,
        retweets: 10,
        tweetText: `ワンワン！今日、公園でうんちしたけど、掃除してくれなかった！私はバンディダだよ！🐾😎`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },    
    {
        handle: `@Billie  ✅`,
        profilePic: `images/screenbila.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `Woof woof! Who wants to join me on a one-way trip to Doggieland? 🐾🚀 No experience needed as a pawstronaut! Let's go!`,
        replies: [
                  {
                handle: `@Bibi 🐾`,
                profilePic: `images/bilazul1.png`,
                tweetText: `I'm ready! Let's fetch some space bones! 🚀🐶`,
            },
                  {
               handle: `@LilBila 🐕`,
               profilePic: `images/biladeitada.jpeg`,
               tweetText: `Count me in! No pup left behind! 🐾✨`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
        {
        handle: `@CodeWithBila12`,
        profilePic: `images/bila-rabinho.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Am I still a real coder if I only know HTML? Woof! 🐾`,
        replies: [
            {
                handle: `@Bibidev 🐾`,
                profilePic: `images/bibi.png`,
                tweetText: `Woof woof! Of course you are! Every pup starts somewhere! 🐶✨`,
            },
           {
                handle: `@Bossbili 🐕`,
                profilePic: `images/lilbila.png`,
                tweetText: `Doesn't matter the language—as long as you're wagging and coding! 🐾💻`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },     
]