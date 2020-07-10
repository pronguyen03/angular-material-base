import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public sideNavState = false;

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
  }

  onSinenavToggle(): void {
    this.sideNavState = !this.sideNavState;

    this.sidenavService.sideNavState$.next(this.sideNavState);
  }

}
