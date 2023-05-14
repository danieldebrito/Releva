import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: true,
  imports: [IonicModule]

})
export class SplashComponent  implements OnInit {

  private audioContext: AudioContext = new AudioContext();
  private sound: HTMLAudioElement = new Audio('src');

  constructor( private modalController: ModalController) { }


  ionViewDidEnter(){
    setTimeout(() => {
      this.modalController.dismiss();
    }, 3200);
  }

  public reproducirSonido(): void {
    const source = this.audioContext.createMediaElementSource(this.sound);
    source.connect(this.audioContext.destination);
    this.sound.play();
  }

  ngOnInit() {
    this.reproducirSonido();
  }
}
