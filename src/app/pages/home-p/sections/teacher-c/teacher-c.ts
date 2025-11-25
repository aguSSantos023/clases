import { Component, computed, input } from '@angular/core';
import { Colors } from '../../../../shared/interface/colors';
import { getColorShades } from '../../../../shared/utils/colors-map';
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";



type ColorPair = { top: string; bot: string };

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
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'PHP',
    'Python',
    'Java',
    'Web Components',
    'Node.js',
    'Bun',

    'Angular',
    'React',
    'Vue',
    'Svelte',
    'jQuery',

    'Tailwind',
    'Bootstrap',
    'Sass/SCSS',
    'PrimeNG',
    'Ionic',

    'Express.js',
    'Laravel',
    'CodeIgniter',
    'Firebase',
    'JWT',
    'JSON',

    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'SQLite',

    'Git',
    'GitHub',
    'Docker',
    'Vercel',
    'Netlify',
    'npm',
    'Yarn',
    'Postman',
    'VS Code',
    'VirtualBox',

    'Figma',
    'Penpot',
    'Trello',

    'Godot',
    'Blender',
    'Krita',
    'Inkscape',

    'Arduino',
    'Raspberry Pi',
    'Packet Tracer',
    'Linux',
    'Windows',

    'Office 365',
    'WordPress',
    'Scratch',
  ];




  techColors: Record<string, ColorPair> = {
    // --- LENGUAJES / RUNTIMES ---
    'JavaScript': { top: 'bg-yellow-400', bot: 'bg-yellow-600' },
    'TypeScript': { top: 'bg-blue-600', bot: 'bg-blue-800' },
    'HTML': { top: 'bg-orange-600', bot: 'bg-orange-800' },
    'CSS': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'PHP': { top: 'bg-indigo-500', bot: 'bg-indigo-700' },
    'Python': { top: 'bg-sky-600', bot: 'bg-sky-800' },
    'Java': { top: 'bg-red-700', bot: 'bg-red-900' },
    'Web Components': { top: 'bg-violet-500', bot: 'bg-violet-700' },
    'Node.js': { top: 'bg-green-600', bot: 'bg-green-800' },
    'Bun': { top: 'bg-yellow-500', bot: 'bg-yellow-700' },

    // --- FRONTEND FRAMEWORKS ---
    'Angular': { top: 'bg-red-500', bot: 'bg-red-700' },
    'React': { top: 'bg-cyan-500', bot: 'bg-cyan-700' },
    'Vue': { top: 'bg-emerald-500', bot: 'bg-emerald-700' },
    'Svelte': { top: 'bg-orange-500', bot: 'bg-orange-700' },
    'Qwik': { top: 'bg-blue-500', bot: 'bg-blue-700' },

    // --- ESTILADO Y UTILS ---
    'Tailwind': { top: 'bg-teal-400', bot: 'bg-teal-600' },
    'Bootstrap': { top: 'bg-purple-600', bot: 'bg-purple-800' },
    'Sass/SCSS': { top: 'bg-pink-600', bot: 'bg-pink-800' },
    'PrimeNG': { top: 'bg-indigo-400', bot: 'bg-indigo-600' },
    'jQuery': { top: 'bg-blue-700', bot: 'bg-blue-900' },
    'Ionic': { top: 'bg-blue-500', bot: 'bg-blue-700' },

    // --- BACKEND / DATOS / SERVICIOS ---
    'Express.js': { top: 'bg-gray-600', bot: 'bg-gray-800' },
    'Laravel': { top: 'bg-red-600', bot: 'bg-red-800' },
    'CodeIgniter': { top: 'bg-red-500', bot: 'bg-red-700' },
    'Firebase': { top: 'bg-amber-500', bot: 'bg-amber-700' },
    'MySQL': { top: 'bg-sky-500', bot: 'bg-sky-700' },
    'PostgreSQL': { top: 'bg-blue-600', bot: 'bg-blue-800' },
    'MongoDB': { top: 'bg-green-500', bot: 'bg-green-700' },
    'SQLite': { top: 'bg-cyan-600', bot: 'bg-cyan-800' },
    'JWT': { top: 'bg-pink-500', bot: 'bg-pink-700' },
    'JSON': { top: 'bg-gray-500', bot: 'bg-gray-700' },

    // --- DEVOPS / HERRAMIENTAS / TESTING ---
    'Docker': { top: 'bg-blue-600', bot: 'bg-blue-800' },
    'Git': { top: 'bg-orange-600', bot: 'bg-orange-800' },
    'GitHub': { top: 'bg-gray-800', bot: 'bg-black' },
    'Vercel': { top: 'bg-gray-800', bot: 'bg-black' },
    'Netlify': { top: 'bg-teal-500', bot: 'bg-teal-700' },
    'Postman': { top: 'bg-orange-500', bot: 'bg-orange-700' },
    'VS Code': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'npm': { top: 'bg-red-500', bot: 'bg-red-700' },
    'Yarn': { top: 'bg-sky-500', bot: 'bg-sky-700' },
    'VirtualBox': { top: 'bg-blue-600', bot: 'bg-blue-800' },

    // --- DISEÑO Y GESTIÓN ---
    'Figma': { top: 'bg-rose-500', bot: 'bg-rose-700' },
    'Penpot': { top: 'bg-teal-500', bot: 'bg-teal-700' },
    'Trello': { top: 'bg-blue-400', bot: 'bg-blue-600' },

    // --- VIDEOJUEGOS Y GRÁFICOS ---
    'Godot': { top: 'bg-blue-400', bot: 'bg-blue-600' },
    'Blender': { top: 'bg-orange-400', bot: 'bg-orange-600' },
    'Krita': { top: 'bg-pink-400', bot: 'bg-pink-600' },
    'Inkscape': { top: 'bg-slate-700', bot: 'bg-slate-900' },

    // --- SISTEMAS Y EDUCACIÓN ---
    'Arduino': { top: 'bg-teal-600', bot: 'bg-teal-800' },
    'Raspberry Pi': { top: 'bg-rose-600', bot: 'bg-rose-800' },
    'Packet Tracer': { top: 'bg-emerald-600', bot: 'bg-emerald-800' },
    'Linux': { top: 'bg-yellow-600', bot: 'bg-yellow-800' },
    'Windows': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'Office 365': { top: 'bg-orange-600', bot: 'bg-orange-800' },
    'WordPress': { top: 'bg-cyan-700', bot: 'bg-cyan-900' },
    'Scratch': { top: 'bg-orange-400', bot: 'bg-orange-600' },
  };
}
