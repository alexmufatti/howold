import './App.css'
import HowOld from "./HowOld.tsx";
import {DateTime} from "luxon";

function App() {


  return (
      <div id="app">
        <HowOld birthdate={DateTime.fromISO("2015-12-23T16:58:00Z")} name={'Fiammi'} initial={'F'}></HowOld>
        <HowOld birthdate={DateTime.fromISO("2020-05-22T15:58:00Z")} name={'Alice'} initial={'A'}></HowOld>
      </div>
  )
}

export default App
