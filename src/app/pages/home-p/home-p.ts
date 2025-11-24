import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { HeroC } from "./sections/hero-c/hero-c";
import { BtnPressC } from "../../shared/components/btn-press-c/btn-press-c";
import { MenuOverlayC } from "../../shared/components/menu-overlay-c/menu-overlay-c";
import { ForWhomC } from "./sections/for-whom-c/for-whom-c";
import { Colors } from '../../shared/interface/colors';
import { CourseC } from "./sections/course-c/course-c";
import { TeacherC } from "./sections/teacher-c/teacher-c";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-p',
  imports: [HeroC, BtnPressC, MenuOverlayC, ForWhomC, CourseC, TeacherC],
  templateUrl: './home-p.html',
  styleUrl: './home-p.css',
})
export class HomeP {

  isAnimatingMenu = signal<boolean>(false)
  colorPress = signal<Colors>('blue')

  private router = inject(Router);


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



  getColorPress(color: Colors){
    this.colorPress.set(color)
  }

  goToContact = () => {
    this.router.navigate(['/contact'], { fragment: 'hero' });
  }

}
