import './style.css'

export default function SearchButton({imageContent, searchContent, ref}) {    
    const searchURL = `./${searchContent}`;
    return (
        <div className="SearchButton">
            <a href={searchURL} ref={ref}>
                <img src={imageContent}/>
            </a>
        </div>
    )
}