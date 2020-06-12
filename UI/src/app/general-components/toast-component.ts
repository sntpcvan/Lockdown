import { Component, Input } from "@angular/core";
import * as $ from "jquery";

@Component(
    {
        selector: 'app-toast',
        templateUrl: './toast-component.html',
        styleUrls: ['./toast-component.css']
    }
)
export class ToastComponent {

    @Input() message: string;
    showToast: boolean;
    ngOnChanges() {
        this.showToast = true;
      setTimeout(() => {
          if (this.message) {
            this.showToast = false;         
          }         
      }, 1000);
    }
}