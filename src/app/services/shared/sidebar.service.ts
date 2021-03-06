import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo : 'Principal',
      icono : 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'graficas', url: '/graficas1' },
        { titulo: 'promesas', url: '/promesas' },
        { titulo: 'rxjs', url: '/rxjs' }
      ]
    }
  ];
  constructor() { }
}
