import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() public label: string;
  @Input() public placeholder = '';
  @Input() public value: string | number = '';

  public innerValue: string | number = '';

  constructor() {}

  ngOnInit(): void {
    this.innerValue = this.innerValue || this.value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(VOutside) {
    this.innerValue = VOutside;
  }

  onInputValue(VInside) {
    this.innerValue = VInside;
    this.onChange(VInside);
    this.onTouched();
  }

  onFocus(VInside) {
    this.innerValue = VInside;
    this.onChange(VInside);
    this.onTouched();
  }
}
