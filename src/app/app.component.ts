import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diligent';

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'magnify',
      this.domSanitizer.bypassSecurityTrustResourceUrl('https://gist.githubusercontent.com/mikrotron/683a95f0e88d33474226d29905de7ed6/raw/408d5b067a64550754182c24177c879ba8ad1828/magnify.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('https://gist.githubusercontent.com/mikrotron/683a95f0e88d33474226d29905de7ed6/raw/408d5b067a64550754182c24177c879ba8ad1828/logo.svg')
    );

  }
}
