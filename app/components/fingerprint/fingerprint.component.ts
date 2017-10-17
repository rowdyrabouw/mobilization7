// Angular
import { Component } from "@angular/core";

// Plugins
import { FingerprintAuth } from "nativescript-fingerprint-auth";

// Shared
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
  moduleId: module.id,
  selector: "fingerprint",
  templateUrl: "fingerprint.component.html"
})
export class FingerprintComponent {
  private fingerprintAuth: FingerprintAuth;
  public constructor(private menuComponent: MenuComponent) {
    this.fingerprintAuth = new FingerprintAuth();
    this.fingerprintAuth.available().then((avail: boolean) => {
      console.log(`Available? ${avail}`);
    });
  }

  toggleDrawer(): void {
    this.menuComponent.toggleMenu();
  }
}
