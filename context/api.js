export default class Api {
  static confirmCause() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }
}
