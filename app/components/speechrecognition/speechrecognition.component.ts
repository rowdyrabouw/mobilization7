// Angular
import { Component, OnInit } from "@angular/core";

// Plugins
import { SpeechRecognition } from "nativescript-speech-recognition";
import { SpeechRecognitionTranscription } from "nativescript-speech-recognition";

// Shared
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
  moduleId: module.id,
  selector: "speechrecognition",
  templateUrl: "speechrecognition.component.html"
})
export class SpeechRecognitionComponent implements OnInit {
  private speechRecognition = new SpeechRecognition();

  constructor(private menuComponent: MenuComponent) {}

  ngOnInit() {
    this.checkAvailability();
  }

  checkAvailability(): void {
    this.speechRecognition
      .available()
      .then(
        (available: boolean) => console.log(available ? "YES!" : "NO"),
        (err: string) => console.log(err)
      );
  }

  startListening() {
    this.speechRecognition
      .startListening({
        // optional, uses the device locale by default
        locale: "en-US",
        // set to true to get results back continuously
        returnPartialResults: true,
        // this callback will be invoked repeatedly during recognition
        onResult: (transcription: SpeechRecognitionTranscription) => {
          console.log(`User said: ${transcription.text}`);
          console.log(`User finished?: ${transcription.finished}`);
        }
      })
      .then(
        (started: boolean) => {
          console.log(`started listening`);
        },
        (errorMessage: string) => {
          console.log(`Error: ${errorMessage}`);
        }
      );
  }

  toggleDrawer(): void {
    this.menuComponent.toggleMenu();
  }
}
