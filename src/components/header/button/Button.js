import "./button.css"

function Button(props) {
    const { title, name, onClick, active } = props;

    return (
        <div
            className={`headerButton ${active === name ? 'active' : ''}`}
            onClick={() => onClick(name)}
        >{title}</div>
    );
}

export default Button;