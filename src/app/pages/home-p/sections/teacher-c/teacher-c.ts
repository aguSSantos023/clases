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




  techColors: Record<string, ColorPair> = {
    'Angular': { top: 'bg-red-500', bot: 'bg-red-700' },
    'React': { top: 'bg-cyan-500', bot: 'bg-cyan-700' },
    'Vue': { top: 'bg-emerald-500', bot: 'bg-emerald-700' },
    'Svelte': { top: 'bg-orange-500', bot: 'bg-orange-700' },
    'Qwik': { top: 'bg-blue-500', bot: 'bg-blue-700' },

    'Express.js': { top: 'bg-gray-600', bot: 'bg-gray-800' },
    'Laravel': { top: 'bg-red-600', bot: 'bg-red-800' },
    'Node.js': { top: 'bg-green-600', bot: 'bg-green-800' },
    'PHP': { top: 'bg-indigo-500', bot: 'bg-indigo-700' },
    'JavaScript': { top: 'bg-yellow-400', bot: 'bg-yellow-600' },
    'TypeScript': { top: 'bg-blue-600', bot: 'bg-blue-800' },
    'Java': { top: 'bg-red-700', bot: 'bg-red-900' },

    'MySQL': { top: 'bg-sky-500', bot: 'bg-sky-700' },
    'MongoDB': { top: 'bg-green-500', bot: 'bg-green-700' },
    'JWT': { top: 'bg-pink-500', bot: 'bg-pink-700' },
    'JSON': { top: 'bg-gray-500', bot: 'bg-gray-700' },

    'HTML': { top: 'bg-orange-600', bot: 'bg-orange-800' },
    'CSS': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'Tailwind': { top: 'bg-teal-400', bot: 'bg-teal-600' },
    'Bootstrap': { top: 'bg-purple-600', bot: 'bg-purple-800' },
    'PrimeNG': { top: 'bg-indigo-400', bot: 'bg-indigo-600' },

    'jQuery': { top: 'bg-blue-700', bot: 'bg-blue-900' },
    'Git': { top: 'bg-orange-600', bot: 'bg-orange-800' },
    'GitHub': { top: 'bg-gray-800', bot: 'bg-black' },
    'Postman': { top: 'bg-orange-500', bot: 'bg-orange-700' },

    'Godot': { top: 'bg-blue-400', bot: 'bg-blue-600' },
    'Krita': { top: 'bg-pink-400', bot: 'bg-pink-600' },
    'Inkscape': { top: 'bg-slate-700', bot: 'bg-slate-900' },
    'Blender': { top: 'bg-orange-400', bot: 'bg-orange-600' },
    'Penpot': { top: 'bg-teal-500', bot: 'bg-teal-700' },

    'CodeIgniter': { top: 'bg-red-500', bot: 'bg-red-700' },
    'Ionic': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'VirtualBox': { top: 'bg-blue-600', bot: 'bg-blue-800' },
    'Windows': { top: 'bg-blue-500', bot: 'bg-blue-700' },
    'Linux': { top: 'bg-yellow-600', bot: 'bg-yellow-800' },
  };

}
