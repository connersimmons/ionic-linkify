import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TweetComponent } from "./tweet.component";
import { LinkifyPipeModule } from "../pipes/linkify.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    LinkifyPipeModule,
  ],
  declarations: [TweetComponent],
  exports: [TweetComponent],
})
export class TweetComponentModule {}
