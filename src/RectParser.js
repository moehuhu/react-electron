const RectParser = (rect) =>{
    const [x,y,width,height] = rect.split('/')
    return {x: x, y: y, width: width, height: height}
}
module.exports = RectParser