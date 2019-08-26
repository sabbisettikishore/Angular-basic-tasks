import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }


  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
         
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'forms',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'template'
          },
          {
            label: 'Services',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'servicehttpex'
          },
          {
            label: 'Component Communication',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'communication'
          },
          {
            label: 'Pipes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'pipes'
          },
          {
            label: 'Data Binding',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'binding'
          },
          {
            label: 'Directives',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'directive'
          },
          {
            label: 'TypeScript',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'typescript'
          },
          {
            label: 'Routing',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'routingcomp'
          },
          {
            label: 'Validation',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'passvalid'
          },
          {
            label: 'rxjs',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'rxjs'
          },
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Proxy-Ex',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'proxyex'
          },
          {
            label: 'Register Form',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'reg'
          },
          {
            label: 'Interceptor',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'interceptor'
          },
          {
            label: 'Multi Check Box',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'check'
          },
          
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus' },
          { label: 'Actions', icon: 'pi pi-fw pi-cog' }
        ]
      }
    ];
  }

}
