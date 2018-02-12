import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {
  inventory: Inventory = {
    inventoryID: 1,
    itemName: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
