const rollD6 = (): number => Math.floor(Math.random() * (24 - 1) + 1);

interface _GenerateTen {
  gList?: Array<number>;
  gCount?: number;
}

const roll10 = (rollFunction: Function): Array<number> => {
  const _generateTen = ({ gList = [],  gCount = 0 }: _GenerateTen): Array<number> => {
    if (gCount < 10) return  _generateTen({ gList: [...gList, rollFunction()], gCount: (gCount + 1) })
    return gList;
  }
  return _generateTen({}); 
}

export { roll10, rollD6 };

