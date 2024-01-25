export default class userDto {
  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
    this.email = user.email;
    this.provider = user.provider;
    this.age = user.age;
  }
}
