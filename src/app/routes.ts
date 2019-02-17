import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { EditGuard } from './guards/edit.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';
import { WallComponent } from './profile/wall/wall.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

export const Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'user/profile/:id', component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: WallComponent },
      { path: 'edit', component: EditProfileComponent, canActivate: [EditGuard]}

    ]
  },
  { path: 'create/joke', component: JokeComponent, canActivate: [AuthGuard] },
  { path: 'jokes', component: JokesComponent }
];
