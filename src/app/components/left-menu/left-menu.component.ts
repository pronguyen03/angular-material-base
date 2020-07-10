import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { animateText, onSideNavChange } from 'src/app/animations/animations';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState = false;
  public linkText = false;
  public pages: Page[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox'},
    { name: 'Starred', link: 'some-link', icon: 'star'},
    { name: 'Send email', link: 'some-link', icon: 'send'},
  ];

  constructor(
    private sidenavService: SidenavService
  ) {
    this.sidenavService.sideNavState$.subscribe( res => {
      this.sideNavState = res;
      setTimeout(() => {
        this.linkText = this.sideNavState;
      }, 200);
    });
  }

  ngOnInit(): void { }

}
