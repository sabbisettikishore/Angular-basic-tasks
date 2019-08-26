import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private tempref:TemplateRef<any>, private veiwref:ViewContainerRef) { }
  

  @Input() set appStructural(data){
  data ? this.veiwref.createEmbeddedView(this.tempref) : this.veiwref.clear();
  }

}
