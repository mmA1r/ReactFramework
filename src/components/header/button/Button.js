import "./button.css"

function Button (props) {
    const { title, name, onClick, active } = props;

    const setActive = () =>  { return `headerButton ${ active === name ? 'active' : ''}`; }

    return (
        <div
            className = { setActive() }
            onClick = { () => onClick(name) }
        >{ title }</div>
    );
}

export default Button;