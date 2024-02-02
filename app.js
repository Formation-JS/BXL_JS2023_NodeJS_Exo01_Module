const shapeEnum = require("./enums/shape.enum");
const shapeTool = require("./tools/shape.tool");


const f1 = {
    type: shapeEnum.circle,
    radius: 42
};

const f2 = {
    type: shapeEnum.rectangle,
    height: 10,
    width: 2
};

const r1 = shapeTool.area(f1);
const r2 = shapeTool.perimetre(f2);

