export default class ErrorRepository {
  constructor(list = undefined) {
    this.errors = new Map(list);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
