import { Injectable } from "@angular/core";

export interface Tweet {
  username: string;
  handle: string;
  like: number;
  retweets: number;
  response: number;
  text: string;
  link?: string;
  date: string;
  liked: boolean;
  retweet: boolean;
  attachment?: string;
  img: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  /*
   * Fake tweets courtesy of Simon Grimm
   * https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json
   */
  public tweets: Tweet[] = [
    {
      username: "Max Lynch",
      handle: "maxlynch",
      like: 446,
      retweets: 173,
      response: 21,
      text:
        "Crazy, according to @appfigures, @Ionicframework is one of the top 4 development SDKs on both iOS and Android, and one of the top three 3rd party SDKs (more like top 2.5 since it overlaps w/ Cordova) Rocket",
      date: "1581322823",
      liked: true,
      retweet: false,
      attachment:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-0.jpeg",
      img:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-max.jpg",
    },
    {
      username: "Simon Grimm",
      handle: "schlimmson",
      like: 14,
      retweets: 2,
      response: 6,
      liked: true,
      retweet: true,
      text:
        "Want to stay up to date with @Ionicframework? Become a Member of the Ionic Academy and come to speed with Ionic quickly 🔥 https://buff.ly/2vMP6XJ #mobiledev @ionicacademy",
      date: "1600874423",
      attachment:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-1.jpeg",
      img:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-simon.jpg",
    },
    {
      username: "ionic",
      handle: "ionicframework",
      like: 1337,
      retweets: 529,
      response: 36,
      liked: false,
      retweet: true,
      text:
        "🎉 Ionic Vue is (finally) here!<br>Truly native, truly web, truly cross platform<br><br>Built with @vuejs 3.0<br>Standard Vue tooling w/ vue-router<br>100+ mobile UI components<br>Mobile phone iOS, Android, and PWAs<br><br>Give it a spin 👇",
      link: "https://ionicframework.com/blog/announcing-ionic-vue/",
      date: "1602793223",
      img:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ionic.jpg",
    },
    {
      username: "Ben Sperry",
      handle: "benjsperry",
      like: 106,
      retweets: 28,
      response: 12,
      liked: false,
      retweet: false,
      text:
        "Latest up date to the Ionic Start Wizard, which makes it even easier to spin up a new app!",
      date: "1586326823",
      img:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ben.jpg",
    },
    {
      username: "Matt Nekow",
      handle: "dotNetkow",
      like: 45,
      retweets: 3,
      response: 13,
      liked: true,
      retweet: true,
      text:
        "2021 tech stack focus:<br> - React (expand)<br>- NextJS (learn)<br>- Vue 3 (expand)<br>- Angular (maintain)<br>- CSS (actually learn it! Smiling face with open mouth and cold sweat)<br>- AWS Amplify<br>You?",
      date: "1600874423",
      img:
        "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-matt.jpg",
    },
  ];

  constructor() {}

  public getTweets(): Tweet[] {
    return this.tweets;
  }
}
