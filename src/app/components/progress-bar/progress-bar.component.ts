import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'so-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @HostBinding('style') get _style() { return {
    '--size': this.size,
    '--color': this.color,
    '--padding': this.padding
  }}

  @Input() value: number | null = null;
  @Input() size = '1rem';
  @Input() padding = '0.5rem';
  @Input() color = 'darkcyan';

  get indicatorStyle(): Record<string, string> {
    return {
      width: `${this.value || 0}%`
    }
  }

  get tooltipStyle(): Record<string, string> {
    return {
      left: `${this.value || 0}%`
    }
  }

}
