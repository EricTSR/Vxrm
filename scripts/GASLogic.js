class GASLogic {
  constructor(aID, bID, opID, level) {
    this.a = "X";
    this.operator = "";
    this.b = "X";
    this.aID = aID;
    this.bID = bID;
    this.opID = opID;
    this.level = level;
    this.range = 0;

    this.setRange();
    this.setLevel();
  }


  /**
   * Sets the range of the numbers
   */
  setRange() {
    if (this.level === 0) {
      this.range = 20;
    } else if (this.level === 1) {
      this.range = 50;
    } else if (this.level === 2) {
      this.range = 200;
    } else {
      this.range = 1000;
    }
    console.log("NG: Range set to: " + this.range);
  }

  /**
   * Generate the finished Task
   */
  setLevel() {
    this.setValue(this.getRandomInt(this.range), this.aID);
    this.setValue(this.getRandomInt(this.range), this.bID);
    document.getElementById(this.opID).value = "";
    console.log("NG: Game has been set to the Elements!");
  }

  setValue(value, id) {
      document.getElementById(id).value = value;
      document.getElementById(id).readOnly = true;

  }

  /**
   * Generates a random int number of the range of 0 to max
   * @param max
   * @returns {number}
   */
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


}
