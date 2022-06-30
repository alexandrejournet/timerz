import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private readonly toastr: ToastrService) { }


  showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title);
  }

  showError(title: string, msg: string) {
    this.toastr.error(msg, title);
  }

  showWarn(title: string, msg: string) {
    this.toastr.warning(msg, title);
  }
}
