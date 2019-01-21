export class LoginRequest {
  userID: string;
  password: string;

  constructor(userID, password) {
    this.userID = userID;
    this.password = password;
  }
}
