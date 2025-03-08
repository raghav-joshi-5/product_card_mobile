import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';
import { mobileProducts } from '../../const/mobile';

@Component({
  selector: 'app-mobileproduct',
  templateUrl: './mobileproduct.component.html',
  styleUrls: ['./mobileproduct.component.scss'],
})
export class MobileproductComponent implements OnInit {
  mobileArr: Array<Imobile> = mobileProducts;
  
  constructor() {}

  ngOnInit(): void {}
}
