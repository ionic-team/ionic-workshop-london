import {Page, ActionSheet} from 'ionic/ionic';
import {Friends} from '../data/data';
import {Control, ControlGroup} from 'angular2/angular2';

@Page({
  templateUrl:"app/about/about.html",
})
export class AboutCtrl {
  constructor(friends:Friends, actionSheet:ActionSheet){
    this.settings = new ControlGroup({
      enableFriends: new Control(true)
    });
    this.actionSheet = actionSheet;
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
}
