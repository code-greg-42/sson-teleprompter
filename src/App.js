import './App.css';
import {useState, useEffect} from "react";
import { useScrollBy, useScrollTo } from "react-use-window-scroll";
import Sidebar from "./Sidebar.js";
import Textbox from "./Textbox.js";

function App() {
  const [timer, setTimer] = useState(0);

  const [timerId, setTimerId] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(29);

  const scrollBy = useScrollBy();
  const scrollTo = useScrollTo();

  useEffect(() => {
    let interval;
    if (isScrolling) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isScrolling) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isScrolling]);

  function scroller() {
    scrollBy(1, 0);
  }

  function resetPosition() {
    scrollTo(0, 0);
  }

  function useStartStop() {

    if (!isScrolling) {
      const id = setInterval(scroller, scrollInterval);
      setTimerId(id);
      setIsScrolling(true);
    }

    if (isScrolling) {
      clearInterval(timerId);
      setIsScrolling(false);
    }
  }

  function handleAddIntervalClick() {
    setScrollInterval(scrollInterval + 1);
  }

  function handleDecIntervalClick() {
    if (scrollInterval > 1) {
    setScrollInterval(scrollInterval - 1);
    }
  }

  function handleResetClick() {
    if (!isScrolling) {
      resetPosition();
      setTimer(0);
    }
  }

  return (<>
    <Sidebar onStartStop={useStartStop} timer={timer} isScrolling={isScrolling} onResetClick={handleResetClick} onAddIntervalClick={handleAddIntervalClick} onDecIntervalClick={handleDecIntervalClick} scrollInterval={scrollInterval} />
    <Textbox />
  </>)
}

export default App;
