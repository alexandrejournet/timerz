import {AfterViewInit, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Timer} from "../../models/timer.model";

@Component({
  standalone: true,
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  imports: [
    CommonModule
  ]
})
export class CircleProgressComponent implements OnInit, AfterViewInit {

  @Input() progress?: number;
  progressShown?: number;
  @Input() timer?: Timer;

  @ViewChild('progressBar') progressBar?: ElementRef;

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData() {
    if(this.progressBar && this.progress && this.timer?.time) {
      this.progressShown = Math.round(this.progress)
      const pourcent = ((this.progress * 100) / this.timer.time).toFixed(2);
      this.progressBar.nativeElement.style.background = `conic-gradient(#404040 ${pourcent}%, #BABABA ${pourcent}%)`;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}
