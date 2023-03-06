import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";

export interface SelectOptions {
  id: number,
  title: string,
  value: string,
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input()
  public label: string = '';

  @Input()
  public options: SelectOptions[] = []

  @Input()
  public myControl: FormControl = new FormControl('');

  constructor(private elementRef: ElementRef) {
  }
  selectedOption: string = '';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.isOpen = false;
    console.log(option,'.options-list {');
    this.myControl.setValue(option);
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

}
