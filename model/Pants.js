import ParentClass from './ParentClass';

class Pants extends ParentClass {
  /**
   *
   * @param {Color} color
   * @param {number} hip
   */
  constructor(color, hip) {
    super();

    /**
     * @type {Color}
     */
    this.color = color;

    /**
     * @type {number}
     */
    this.hip = hip;
  }
}

export default Pants;
