// Angular
import { Component, OnInit } from "@angular/core";

// Plugins
import { TNSPlayer } from "nativescript-audio";

// import TranslateService from @ngx-translate/core

// Shared
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
  moduleId: module.id,
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  private _player: TNSPlayer;

  // inject translateService in constructor
  constructor(private menuComponent: MenuComponent) {}

  ngOnInit() {
    this._player = new TNSPlayer();
    this._player.initFromFile({
      audioFile: "~/assets/audio/testing.mp3", // ~ = app directory
      loop: false
    });
  }

  toggleDrawer(): void {
    this.menuComponent.toggleMenu();
  }

  toggleAudio() {
    if (this._player.isAudioPlaying()) {
      this._player.seekTo(0);
      this._player.pause();
    } else {
      this._player.play();
    }
  }

  // changeLanguage method to use translateService with lang param
}
