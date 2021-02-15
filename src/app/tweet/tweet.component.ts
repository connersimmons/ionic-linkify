import { Component, OnInit, Input } from "@angular/core";
import { Tweet } from "../services/data.service";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"],
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === "ios";
  }
}
