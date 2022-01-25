import { Component, Input } from '@angular/core';

@Component({
  selector: 'so-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() value: number | null = null;

  get indicatorStyle(): Record<string, string> {
    return {
      width: `${this.value || 0}%`,
      backgroundImage: `repeating-linear-gradient(
        -45deg,
          #666,
          #666 10px,
          #777 10px,
          #777 20px)`
    }
  }

}
