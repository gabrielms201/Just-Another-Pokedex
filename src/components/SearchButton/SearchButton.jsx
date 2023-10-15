import './style.css'

export default function SearchButton({imageContent, searchContent, handleClick}) {
    return (
        <div className="SearchButton">
            <button onClick={handleClick}>
                <img src={imageContent}/>
            </button>
        </div>
    )
}