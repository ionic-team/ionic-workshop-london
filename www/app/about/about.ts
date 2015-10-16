import {Page, ActionSheet, Modal, Popup, Animation, Camera} from 'ionic/ionic';
import {Friends} from '../data/data';
import {Control, ControlGroup} from 'angular2/angular2';

@Page({
  templateUrl:"app/about/about.html",
})
export class AboutCtrl {
  constructor(friends:Friends, actionSheet:ActionSheet, modal:Modal, popup:Popup){
    this.settings = new ControlGroup({
      enableFriends: new Control(true)
    });
    this.actionSheet = actionSheet;
    this.modal = modal;
    this.popup = popup;

    this.animation = new Animation();
    this.animation
      .duration(2000)

    var ionitronSpin = new Animation(document.querySelector('#ionitron'));
    ionitronSpin
      .from('rotate', '0deg')
      .to('rotate', '360deg')

    this.animation.add(ionitronSpin);

  }

  showActionSheet() {
    this.actionSheet.open({
      buttons: [
        { text: 'Share This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
        console.log('Canceled');
      },
      destructiveButtonClicked: () => {
        console.log('Destructive clicked');
      },
      buttonClicked: function(index) {
        console.log('Button clicked', index);
        if(index == 1) { return false; }
        return true;
      }
    }).then(actionSheet => {
      // Action sheet was created and opened
      // this.actionSheet = actionSheet;
      // this.actionSheet.close() to close it programatically
    })
  }

  showModal() {
    this.modal.open(MyModal);
  }

  showPopup() {
    this.popup.alert({
      title: "hi there",
      template: "You made a popup, way to go!"
    })
  }

  play() {
    console.log(this.animation)
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  takePhoto() {
    Camera.getPicture({
      targetWidth: 400,
      targetHeight: 400
    }).then((data) => {
      // Camera data
      let base64Image = "data:image/jpeg;base64," + data;
      document.querySelector('#ionitron').src = base64Image;
    })
  }
}

@Page({
  template: `
  <ion-pane padding>
    <h2>Hurray Modals!</h2>
    <button primary (click)="close()">Close</button>
  </ion-pane>`
})
class MyModal extends Modal {
  constructor() {
  }
}
