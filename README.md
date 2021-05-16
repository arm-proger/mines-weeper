# __MINES WEEPER__

## Source map

* Source
  * minesWeeper.js 
* README.md

---

Create "Mines Weeper" game logic

```js
  const gameDesk = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const positionsOfBomb = [
    [0, 1],
    [2, 3],
  ];
  runMinesWeeper(gameDesk);
  /*
    [
    [x, x, x, 0],
    [x, x, x, x],
    [0, 0, x, x],
    [0, 0, x, x],]
  */
```

[Decision v1](./src/minesWeeper.js)