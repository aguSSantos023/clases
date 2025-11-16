import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { BtnPressC } from "../../shared/components/btn-press-c/btn-press-c";
import { MenuOverlayC } from "../../shared/components/menu-overlay-c/menu-overlay-c";

@Component({
  selector: 'app-contact-p',
  imports: [BtnPressC, MenuOverlayC],
  templateUrl: './contact-p.html',
  styleUrl: './contact-p.css',
})
export class ContactP {



  isAnimatingMenu = signal<boolean>(false)


  @ViewChild('overlay') overlay!: MenuOverlayC;
  @ViewChild('menuBtn', { read: ElementRef }) menuBtn!: ElementRef;

  toggleMenu = () => {

    if (this.isAnimatingMenu()) return

    if (!this.overlay || !this.menuBtn) return


    if (this.overlay.isOpen()) {

      this.overlay.close();

    } else {

      const rect = this.menuBtn.nativeElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      this.overlay.open(x, y);

    }


    setTimeout(() => this.isAnimatingMenu.set(false) , 550);
  }


}
