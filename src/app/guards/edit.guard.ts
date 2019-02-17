import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Injectable()
export class EditGuard implements CanActivate {
  private profileId;
  private userID: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  canActivate() {
    if (this.route.snapshot.children.length > 0) {
      this.profileId = +this.route.snapshot.children[0].params.id;
    } else {
      this.profileId = 0;
    }
    this.userID = this.authService.getAuthUser().id;
    if (this.userID === this.profileId) {
      return true;
    } else {
      this.router.navigate([`/user/profile/${this.userID}`]);

      return false;
    }
  }
}
