import _ from 'lodash'
import * as Config from 'conf-cfg-ini'
const parser = new Config()

const initialize = (iniConfig) =>{
    const conf = parser.decode(iniConfig)
    const size = numberToSize(camelize(conf.system||{}))
    const items =  Object.keys(conf).filter(key => _.startsWith(key, 'Item')).map(key => conf[key]).map(item => this.camelize(item)).map(item => this.numberToSize(item))
     
}
const camelize = (obj) => {
    let newObj = {}
    for (let key in obj) {
        newObj[_.camelCase(key)] = obj[key]
    }
    return newObj
}
const numberToSize = (obj) => {
    for (let key in obj) {
        if (key == 'width' || key == 'height') {
            obj[key] = obj[key] + 'px'
        }
    }
    return obj
}