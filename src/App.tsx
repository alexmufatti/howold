import './App.css'
import HowOld from "./HowOld.tsx";
import {DateTime} from "luxon";

function App() {


  return (
      <div id="app">
        <HowOld birthdate={DateTime.fromObject({year: 2015, month: 12, day: 23, hour: 17, minute: 58}, {zone: 'CET'})} name={'Fiammi'} initial={'F'}></HowOld>
        <HowOld birthdate={DateTime.fromObject({year: 2020, month: 5, day: 22, hour: 15, minute: 30}, {zone: 'CET'})} name={'Alice'} initial={'A'}></HowOld>
      </div>
  )
}

export default App
