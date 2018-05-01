import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../providers/user/user.service';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  principalForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserService,
    public alertCtrl: AlertController
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    
    this.principalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      phone: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit():void {
    this.userService.create(this.principalForm.value)
      .then(() => {
        this.principalForm.reset();
        this.presentAlert('Usuario cadastrado com sucesso!');     
      });
  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Informação',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
