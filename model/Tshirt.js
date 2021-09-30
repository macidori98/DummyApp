import ParentClass from './ParentClass';

class Tshirt extends ParentClass {
  /**
   * @param {string} id
   * @param {number} height
   * @param {number} width
   */
  constructor(id, height, width) {
    super(id);

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
