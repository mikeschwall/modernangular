import { Directive, ElementRef,Host,HostListener,Renderer2 } from "@angular/core";

@Directive({
    selector:'[myinput]'
})
export class TodoDirective {
    constructor(private el:ElementRef,private renderer:Renderer2) {}

    @HostListener("focus") onFocus() {
        this.renderer.setStyle(this.el.nativeElement,'width','700px')
    }

    @HostListener("blur") onBlur() {
        this.renderer.setStyle(this.el.nativeElement,'width','300px');
    }
}