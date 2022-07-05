export default function Background(props) {
    let classes = props.isDarkMode ? "dark" : "light";
    return <div id="background" className={classes} />
}