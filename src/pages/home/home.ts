import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';

import { User } from './../../models/user.model';
import { UserService } from './../../providers/user/user.service';
import { PrincipalPage } from './../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;  

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad(){
    this.users = this.userService.users;
  }

  onCadastro():void {
    this.navCtrl.push(PrincipalPage);
  }

  onViewData(user: User):void {
    this.informacaoUsuario(user);
  }

  informacaoUsuario(user: User) {
    let message = 'Nome: ' + user.name + 
    '<br/>Email: ' + user.email + '<br/>Contato: ' + user.phone;

    let alert = this.alertCtrl.create({
      title: 'Informações do Usuário',
      subTitle: message,
      buttons: ['Fechar']
    });
    alert.present();
  }

}
