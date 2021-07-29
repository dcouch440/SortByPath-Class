module.exports = class SortByPath {
  constructor (path) {
    this.path = path
    this.#getDataFromPath = this.#getDataFromPath.bind(this)
    this.byAverage = this.byAverage.bind(this)
    this.byNumber = this.byNumber.bind(this)
    this.byBirthDate = this.byBirthDate.bind(this)
    this.byDate = this.byDate.bind(this)
    this.byString = this.byString.bind(this)
  }
  #getDataFromPath = (object) => {
    const pathArray = this.path.split('.')
    Array(pathArray.length).fill().forEach((_, i) => {
      Object.entries(object).forEach(([key, value]) => {
        if (key === pathArray[i]) {
          object = value;
        }
      })
    })
    return object
  }
  byAverage (a, b) {
    const pathDataA = this.#getDataFromPath(a);
    const pathDataB = this.#getDataFromPath(b);
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    const reducedA = pathDataA.reduce(reducer) / a.length
    const reducedB = pathDataB.reduce(reducer) / b.length

    if (reducedA > reducedB) {
      return 1;
    } else if (reducedA < reducedB) {
      return -1;
    } else {
      return 0
    }
  }
  byNumber(a, b) {
    const pathDataA = this.#getDataFromPath(a);
    const pathDataB = this.#getDataFromPath(b);
    return parseInt(pathDataA) - parseInt(pathDataB);
  }
  byBirthDate(a, b) {
    const pathDataA = this.#getDataFromPath(a);
    const pathDataB = this.#getDataFromPath(b);
    let d1 = new Date(pathDataA);
    let d2 = new Date(pathDataB);
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return -1;
    } else {
      return d1.getUTCDate() - d2.getUTCDate();
    }
  }
  byDate(a, b) {
    const pathDataA = this.#getDataFromPath(a);
    const pathDataB = this.#getDataFromPath(b);
    return new Date(pathDataA).valueOf() - new Date(pathDataB).valueOf();
  }
  byString(a, b) {
    const pathDataA = this.#getDataFromPath(a);
    const pathDataB = this.#getDataFromPath(b);
    if (pathDataA > pathDataB) {
      return 1;
    } else if (pathDataA < pathDataB) {
      return -1
    } else {
      return 0
    }
  }
}