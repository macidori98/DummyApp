import ParentClass from './ParentClass';

class Pants extends ParentClass {
  /**
   *
   * @param {string} id
   * @param {Color} color
   * @param {number} hip
   */
  constructor(id, color, hip) {
    super(id);

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
