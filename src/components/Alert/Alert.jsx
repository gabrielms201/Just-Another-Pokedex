import './style.css'

export default function Alert({text}) {
    return (
        <div className = "Alert">
            <h1>{"!!"} {text}</h1>
        </div>
    )
}