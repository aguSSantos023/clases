import { Component, computed, input } from '@angular/core';
import { Colors } from '../../../../shared/interface/colors';
import { getColorShades } from '../../../../shared/utils/colors-map';
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";





@Component({
  selector: 'app-teacher-c',
  imports: [BtnPressC],
  templateUrl: './teacher-c.html',
  styleUrl: './teacher-c.css',
})
export class TeacherC {

  colorPress = input<Colors>('blue');

  colorClass = computed(() => getColorShades(this.colorPress()))


  techList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'Express.js',
    'Laravel',
    'React',
    'Node.js',
    'PHP',
    'TypeScript',
    'MySQL',
    'MongoDB',

    'Tailwind',
    'Bootstrap',
    'PrimeNG',
    'jQuery',

    'JWT',
    'JSON',
    'Postman',

    'Java',

    'Godot',
    'Krita',
    'Inkscape',
    'Blender',
    'Penpot',

    'CodeIgniter',
    'Ionic',

    'Git',
    'GitHub',
    'VirtualBox',

    'Windows',
    'Linux',
  ];




  techColors: Record<string, string> = {
    // --- Web frameworks ---
    Angular: 'from-red-500 to-red-600',
    'Express.js': 'from-gray-600 to-gray-700',
    Laravel: 'from-red-600 to-orange-600',
    React: 'from-blue-500 to-cyan-500',
    'Node.js': 'from-green-600 to-green-700',
    PHP: 'from-purple-500 to-purple-600',
    JavaScript: 'from-yellow-500 to-yellow-600',
    TypeScript: 'from-blue-600 to-blue-700',
    MySQL: 'from-blue-400 to-blue-500',
    MongoDB: 'from-green-500 to-green-600',

    // --- Frontend / diseño ---
    HTML: 'from-orange-500 to-orange-600',
    CSS: 'from-blue-500 to-blue-600',
    Tailwind: 'from-teal-400 to-cyan-500',
    Bootstrap: 'from-purple-600 to-purple-700',
    PrimeNG: 'from-indigo-500 to-indigo-600',
    jQuery: 'from-sky-500 to-sky-600',

    // --- Arte y herramientas ---
    Godot: 'from-blue-400 to-blue-600',
    Krita: 'from-pink-500 to-purple-500',
    Inkscape: 'from-gray-700 to-gray-900',
    Blender: 'from-orange-500 to-yellow-500',
    Penpot: 'from-emerald-500 to-teal-600',

    // --- Backend extra ---
    CodeIgniter: 'from-red-600 to-orange-700',
    Ionic: 'from-blue-500 to-blue-700',

    // --- Control de versiones ---
    Git: 'from-orange-600 to-orange-700',
    GitHub: 'from-gray-700 to-black',

    // --- Virtualización ---
    VirtualBox: 'from-blue-600 to-blue-800',

    // --- Sistemas ---
    Windows: 'from-blue-500 to-blue-600',
    Linux: 'from-yellow-500 to-yellow-700',

    // --- Herramientas Dev ---
    JWT: 'from-green-500 to-green-600',
    JSON: 'from-orange-500 to-orange-600',
    Postman: 'from-orange-500 to-orange-600',

    // --- Lenguajes extra ---
    Java: 'from-red-500 to-red-700',
  };



}
