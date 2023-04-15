import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind'; //DEĞİŞKEN TÜRLERİNİ BELİRTMEK ZORUNDA DEĞİLSİN, BELİRTMEZSEN GİRDİĞİN DEĞERE GÖRE OTOMATİK KENDİ ALIR. (ANY DEĞİŞKENİ; HER ŞEY OLABİLİR DEMEK )
  user: string = 'Doğukan Akay';
 
}
