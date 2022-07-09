import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametresItem} from '../../../models/parametres-item.model';

@Component({
  selector: 'app-parametres-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parametres-item.component.html',
  styleUrls: ['./parametres-item.component.scss']
})
export class ParametresItemComponent implements OnInit {

  @Input() category: string = '';
  @Input() items: ParametresItem[] = [];
  @Input() item: ParametresItem = new ParametresItem();

  constructor() { }

  ngOnInit(): void {
  }

}
