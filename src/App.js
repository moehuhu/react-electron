import React from 'react';
import _ from 'lodash';
import * as Config from 'conf-cfg-ini'
import RectParser from './RectParser'
const { fs } = window
const parser = new Config()
const path = require('path')
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            system: {},
            items: []
        }
    }
    componentDidMount() {
        console.log(path.join(__dirname, 'src/magicTree/魔法树.ini'))
        fs.readFile(path.join(__dirname, 'src/magicTree/魔法树.ini'), (err, raw) => {
            const data = raw.toString()
            const conf = parser.decode(data)
            console.log(conf)
            let { system } = conf
            system = this.numberToSize(this.camelize(system))
            const itemKey = Object.keys(conf).filter(key => _.startsWith(key, 'Item'))
            const items = itemKey.map(key => conf[key]).map(item => this.camelize(item)).map(item => this.numberToSize(item))
            this.setState({ system, items })
        })
    }
    camelize = (obj) => {
        let newObj = {}
        for (let key in obj) {
            newObj[_.camelCase(key)] = obj[key]
        }
        return newObj
    }
    numberToSize = (obj) => {
        for (let key in obj) {
            if (key == 'width' || key == 'height') {
                obj[key] = obj[key] + 'px'
            }
        }
        return obj
    }
    render() {
        const { system, items } = this.state
        console.log(system, items)
        const imgUrl = 'src/magicTree/' + (items[0] && items[0].bitmapName)
        const backgroundImage ='url('+ (_.replace(window.location.href,'index.html','')+imgUrl)+')'
        console.log(backgroundImage)
        return (
            <div style={{ ...system, backgroundImage,backgroundRepeat:'no-repeat'}}>
            </div>
        );
    }
}

export default App;
