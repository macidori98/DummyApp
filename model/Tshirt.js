import ParentClass from './ParentClass';

class Tshirt extends ParentClass {
  /**
   * @param {number} height
   * @param {number} width
   */
  constructor(height, width) {
    super();

    /**
     * @type {number}
     */
    this.height = height;

    /**
     * @type {number}
     */
    this.width = width;
  }
}

export default Tshirt;
