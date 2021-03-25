import { Component } from '@angular/core';
import {EmbedVideoService} from 'ngx-embed-video';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div [innerHtml]="iframe_html"></div>
  <iframe src="https://player.vimeo.com/video/197933516" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <iframe src="https://www.youtube.com/embed/iHhcHTlGtRs" frameborder="0" allowfullscreen></iframe>
  <iframe src="https://www.dailymotion.com/embed/video/x20qnej" frameborder="0" allowfullscreen></iframe>

  <iframe src="https://player.vimeo.com/video/197933516" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <iframe src="https://www.youtube.com/embed/iHhcHTlGtRs" frameborder="0" allowfullscreen></iframe>
  <iframe src="https://www.dailymotion.com/embed/video/x20qnej" frameborder="0" allowfullscreen></iframe>
`,
  
})
export class AppComponent {
  title = 'video-player-app';
  utubeurl="https://www.youtube.com/watch?v=vuljBNPrAUc&feature=youtu.be";
  iframe_html:any;
  constructor( private embedService: EmbedVideoService){
    this.iframe_html = this.embedService.embed(this.utubeurl);
  }
}
