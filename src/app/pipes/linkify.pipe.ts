import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { Linkifier } from "../models/linkifier";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
// import { SafePipe } from "./safe.pipe";

@Pipe({
  name: "linkify",
})
export class LinkifyPipe implements PipeTransform {
  private linkifer: Linkifier;

  // private safePipe: SafePipe
  constructor(protected sanitizer: DomSanitizer) {
    this.linkifer = new Linkifier();
  }

  transform(value: string): string {
    let linkified = this.linkifer.link(value);
    // console.log(linkified);
    // let safeHtml = this.safePipe.transform(linkified, "html");
    // return safeHtml;
    return linkified;
  }
}

@NgModule({
  declarations: [LinkifyPipe],
  exports: [LinkifyPipe],
})
export class LinkifyPipeModule {}
