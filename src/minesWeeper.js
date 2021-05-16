// MINES WEEPER

const areaWidth = 4
const areaHeight = 8
const mineCount = 8
let mineArea = [],
  incognitoArea = []

// MAKE MINE AREA
const makeMineArea = (width, height) => {
  for (let i = 0; i < height; i++) {
    mineArea[i] = []
    incognitoArea[i] = []
    for (let j = 0; j < width; j++) {
      mineArea[i].push(`${i},${j}`)
      incognitoArea[i].push('*')
    }
  }

  return mineArea
}

// MINE POSITION
const getMinePosition = (count, area) => {
  let i = 0

  while (i < count) {
    const coordX = Math.floor(Math.random() * area.length)
    const coordY = Math.floor(Math.random() * area[0].length)

    if (area[coordX][coordY] === 'Min') {
      i = i
    } else {
      area[coordX][coordY] = 'Min'
      i++
    }
  }
}

// HELPER FUNCTION
const getHelper = (x, y, area, incognito) => {
  if (x > area.length || y > area[0].length) {
    return `Invalid coordinate.`
  } else if (area[x][y] === 'Min') {
    return `You lose. There is a mine at coordinate ${x}, ${y}.`
  } else {
    count = 0
    for (let i = x === 0 ? x : x - 1; i <= x + 1; i++) {
      for (let j = y === 0 ? y : y - 1; j <= y + 1; j++) {
        area[i][j] === 'Min' ? count++ : (count = count)
      }
    }
    count > 0 ? (incognito[x][y] = count) : ' '
    return incognito
  }
}

// MINE WEEPER FUNCTION
const mineWeeperFunc = (areaWidth, areaHeight, mineCount) => {
  makeMineArea(areaWidth, areaHeight)
  getMinePosition(mineCount, mineArea)
}

mineWeeperFunc(areaWidth, areaHeight, mineCount)
console.log(mineArea)
console.log(getHelper(4, 1, mineArea, incognitoArea))
console.log(getHelper(2, 3, mineArea, incognitoArea))
console.log(getHelper(4, 2, mineArea, incognitoArea))
console.log(getHelper(5, 3, mineArea, incognitoArea))
