import './style.css'

export default function Navbar() {
    const items = [
        { id: 1, content: "Home", url: "https://google.com.br" },
    ]

    const listItems = items.map(item => 
            <li key={item.id}>
                <a href={item.url} target="_blank">
                    {item.content}
                </a>
            </li>
    )
    
    return (
        <div className = 'Navbar'>
            <ul className='Navbar-List'>{listItems}</ul>
        </div>
    )
}