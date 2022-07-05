export default function ThemeSelector(props) {
    let label = props.isDarkMode ? "Light Mode" : "Dark Mode";
    let classes = props.isDarkMode ? "btn light" : "btn dark";
    return <button className={classes} onClick={props.onDarkModeClick} id="dark-mode-toggle">{label}</button>
}