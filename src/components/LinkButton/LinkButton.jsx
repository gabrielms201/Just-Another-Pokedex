import './style.css'

export default function LinkButton({link, text, openOnNewTab = false}) {
    const target = openOnNewTab ? "_blank" : "_self";
    return (
        <div className = "LinkButton">
            <a href={link} target={target}>
                {text}
            </a>
        </div>
    )
}