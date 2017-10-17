import { Component } from "@angular/core";
import { AllMips } from "./all-mips";

// Shared
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
  moduleId: module.id,
  selector: "mip-arrows",
  templateUrl: "mip.component.html"
})
export class MipComponent {
  private _speed: number = 24;
  get speed() {
    return this._speed;
  }
  set speed(val: number) {
    this._speed = Math.round(val);
  }

  private _turnSpeed: number = 16;
  get turnSpeed() {
    return this._turnSpeed;
  }
  set turnSpeed(val: number) {
    this._turnSpeed = Math.round(val);
  }

  public moveForward() {
    AllMips.moveForward(this.speed);
  }

  public moveBack() {
    AllMips.moveBack(this.speed);
  }

  public turnLeft() {
    AllMips.turnLeft(this.speed, this.turnSpeed);
  }

  public turnRight() {
    AllMips.turnRight(this.speed, this.turnSpeed);
  }

  constructor(private menuComponent: MenuComponent) {}

  toggleDrawer(): void {
    this.menuComponent.toggleMenu();
  }
}
