import { UserData } from './UserData';
export class UserModel {
  constructor(
    public access_token: string | null,
    public data: UserData
    // public expires_in: number | null,
    // public token_type: string | null,
  ) {}

}
