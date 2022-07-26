import Control from "./Control";

export class ControlApp extends Control {
  private _field: Control<HTMLElement>;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const btn = new Control(this.node, 'button', '', 'button text');
    this._field = new Control(this.node, 'div');
    
    btn.node.onclick = () => {
      console.log('button text clicked');
    }
  }
  
  update(value: number) {
    this._field.node.textContent = value.toString();
  }
}