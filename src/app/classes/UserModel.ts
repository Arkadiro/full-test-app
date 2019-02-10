export class UserModel {
  constructor(
    public access_token: string,
    public user: string,
    public email: string,
    // public expires_in: number | null,
    // public token_type: string | null,
  ) {}

}
