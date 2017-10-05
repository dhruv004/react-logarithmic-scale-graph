# react-logarithmic-scale-graph

## Install

```sh
$ npm install --save react-logarithmic-scale-graph
```

## Using

In your component
```js
import HorizontalGraph from 'react-logarithmic-scale-graph';

class GraphWrapper extends Component{
  render(){
    return(
      <div>
        <HorizontalGraph/>
      </div>
    )
  }
}
```

## Output

![initial-draft](https://user-images.githubusercontent.com/17777371/31226790-1fb9c452-a9f5-11e7-999a-121a790f8c4c.jpg)

Available props for HorizontalGraph are:

- `color`: `string`. color for bar . (default: `#a1e3e2`)
- `alternateColor`: `string`. alternateColor for bar . (default: `#fde4bb`)
- `barHeight`: `number`. height of bar . (default: 35)
- `axisMargin`: `number`. margin for the text to be displayed . (default: 40)
- `barPadding`: `number`. padding between two bars . (default: 5)
- `sort`: `string`. sorting values 'ascending' | 'descending'. (default: `ascending`)
