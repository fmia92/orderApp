import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faExclamationCircle } from '@fortawesome/fontawesome-free';
import { } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  isCollapsed = true;

  filterTerm1: string;
  filterTerm2: string;
  filterTerm3: string;
  filterTerm4: string;
  filterTerm5: string;
  filterTerm6: string;

  public page = 1
  public pageSize  = 20

  orderList = []
  tipos = []
  estados = []

  faInfoCircle = faInfoCircle
  faWarning = faExclamationCircle

  constructor(private ordersService : OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe((response => {
     
      this.orderList = response["data"]
      console.log(this.orderList)
    }))

    this.ordersService.getTipos().subscribe( response => {
      this.tipos = response["data"]
    })

    this.ordersService.getEstados().subscribe( response => {
      this.estados = response["data"]
      console.log(this.estados)
    })

    this.ordersService.getToken()
  }
  handleClearCliente(){
    this.filterTerm1 = ""
  }
  handleClearReferencia(){
    this.filterTerm2 = ""
  }
  handleClearUsuario(){
    this.filterTerm3 = ""
  }
  handleClearFecha(){
    this.filterTerm4 = ""
  }
  handleClearTipo(){
    this.filterTerm5 = ""
  }
  handleClearEstado(){
    this.filterTerm6 = ""
  }

  handleClearAll() {
    this.filterTerm1 = ""
    this.filterTerm2 = ""
    this.filterTerm3 = ""
    this.filterTerm4 = ""
    this.filterTerm5 = ""
    this.filterTerm6 = ""
  }
}
