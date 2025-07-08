export class LoginDTO{
  username:String = '';
  password:String = '';

  constructor(data?: Partial<LoginDTO>) {
    Object.assign(this,data);
  }
}
