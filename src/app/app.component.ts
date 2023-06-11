import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import grapesjs, {Editor} from 'grapesjs';
import grapesJSMJML from 'grapesjs-mjml';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-grapejs-mjml-issue';

  @ViewChild('gjs') gjs!: ElementRef<HTMLDivElement>;

  public grapesjsEditor?: Editor;

  ngAfterViewInit(): void {
    try {
      this.grapesjsEditor = grapesjs.init({
        container: this.gjs.nativeElement,
        fromElement: false,
        storageManager: false,
        height: 'calc(100vh - 108px)',
        plugins: [grapesJSMJML],
        assetManager: { assets: [] },
      });
    } catch (e) {
      console.error(e);
    }
  }
}
