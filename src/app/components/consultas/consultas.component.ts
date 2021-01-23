import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Payload } from 'src/app/models/payload.interface';
import { Purchases } from 'src/app/models/purchases.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  payload: Payload = new Payload()
  purchase: Purchases = new Purchases()

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private CryptoS: CryptoService, private ApiS: ApiService) { }

  ngOnInit(): void {
  }

  onFind() {
    this.purchase.vault_id = '2'
    this.purchase.page = 1
    this.purchase.filter_field = 'Edad'
    this.purchase.filter_value = '23'
    this.purchase.begin_date = new Date().toDateString()
    this.purchase.end_date = new Date().toDateString()
    this.purchase.items_per_page = 20


    this.payload.payload = this.CryptoS.encrypt(JSON.stringify(this.purchase))
    this.ApiS.onSearch(this.payload).subscribe(data => {

      console.log(this.CryptoS.decrypt(JSON.stringify(data.payload)))
    }, (error) => {
      console.log('Ocurrio un Error:' + error.message)
    })

  }
  // onFind(search: Purchases) {
  //   this.payload.payload = this.CryptoS.encrypt(JSON.stringify(search))
  //   this.ApiS.onSearch(this.payload).subscribe(data => {
  //     this.purchase = JSON.parse(this.CryptoS.decrypt(JSON.stringify(data.payload)))
  //     console.log(this.purchase)
  //   })

  // }
}
