export default function Button(props) {
    let label = props.isScrolling ? "Stop" : "Start";
    let classes1 = props.isScrolling ? "no-hover btn" : "btn";
    let classes2 = props.isScrolling ? "no-hover interval-btn" : "interval-btn";
    return (<>
    <div id="sidebar" className="sticky">
    <div id="timer-display">
        <span>{("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((props.timer / 10) % 100)).slice(-2)}</span>
      </div>
    <button id="start-stop" className="btn" onClick={props.onStartStop}>{label}</button>
    <button id="reset-btn" className={classes1} disabled={props.isScrolling} onClick={props.onResetClick}>Reset</button>
    <p id="interval-display">interval: {props.scrollInterval}ms</p>
    <div id="interval-buttons">
    <button id="inc-interval-time" disabled={props.isScrolling} className={classes2} onClick={props.onAddIntervalClick}>+</button>
    <button id="dec-interval-time" disabled={props.isScrolling} className={classes2} onClick={props.onDecIntervalClick}>-</button>
    </div>
    </div>
    </>)
}