import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  selectedItem: string | null = null;
  selectedService: string | null = null;
  selectedDocumentation: string | null = null;

  selectItem(item: string): void {
    this.selectedItem = item;
  }
  selectService(item: string): void {
    this.selectedService = item;
  }
  selectDocumentation(item: string): void {
    this.selectedDocumentation = item;
  }

}
