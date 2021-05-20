# taco-datepicker

> Datepicker component extracted from Taco project


## Install

```
$ npm install @barelyhuman/taco-datepicker
```

## Demo 
[link](https://taco-datepicker.vercel.app/)


## Usage

```js
import React,{useState} from 'react';
import { Datepicker } from '@barelyhuman/taco-datepicker';

const App = props => {
  const [selectedDate,setSelectedDate] = useState(new Date());
	return <Datepicker value={selectedDate} onChange={dateObj=>setSelectedDate(new Date(dateObj.year,dateObj.month,dateObj.date))}/>
};
```


## API

### `<Datepicker>`

React component that renders a datepicker in the form of a calendar

```jsx
<Datepicker value={selectedDate} onChange={dateObj=>setSelectedDate(new Date(dateObj.year,dateObj.month,dateObj.date))}/>
```


## License

MIT © [Reaper](https://reaper.im)
