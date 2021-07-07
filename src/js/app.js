export default class ErrorRepository {
  constructor() {
    this.private = new Map([
      [1, 'Error'],
      [2, 'Undefined'],
      [3, 'Null'],
      [4, 'NaN'],
    ]);
  }

  translate(code) {
    return this.private.get(code) || 'Undefined code';
  }
}
