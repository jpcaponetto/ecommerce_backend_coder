export default class productRepositorie {
  constructor(dao) {
    this.dao = dao;
  }

  async test() {
    return await this.dao.test();
  }
}
