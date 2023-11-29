export default class PriceProductLessZeroException extends Error {
  constructor(message: string) {
    super(message);
  }
}
