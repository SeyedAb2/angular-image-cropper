import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PinturaEditorComponent } from '@pqina/angular-pintura';
import { getCropperDefaults, getEditorDefaults, PinturaEditorOptions } from '@pqina/pintura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('editorRef') editorRef?: PinturaEditorComponent<any> = undefined;

  constructor(private sanitizer: DomSanitizer) {}

  editorOptions = getEditorDefaults() as PinturaEditorOptions;

  src: string = 'assets/1.jpg';
  result?: string = undefined;
  cropAspectRatio = 1;
  locale?: any = { ...getEditorDefaults().locale };

  handleLoad($event: any) {
    console.log('load', $event);

    console.log('component ref', this.editorRef);

    console.log('editor instance ref', this.editorRef?.editor);

    console.log(
      'inline editor image state',
      this.editorRef?.editor?.imageState
    );
  }

  handleProcess($event: any) {
    console.log('process', $event);

    const objectURL = URL.createObjectURL($event.dest);
    this.result = this.sanitizer.bypassSecurityTrustResourceUrl(
      objectURL
    ) as string;
  }

  handleChangeLocale($event: any) {
    // load german locale
    import('@pqina/pintura/locale/nl_NL/index.js').then(
      ({ default: locale }:any) => {
        this.locale = locale;
      }
    );
  }
}
