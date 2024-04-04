export default function Bookcards({ bookcards }) {
    return (
        <>
            {bookcards?.map(element => {
                const amazonUrl = `https://www.amazon.com/s?k=${element.isbn? element.isbn[0] : false}`
                return (
                    <article key={element.key}>
                        {element.isbn && (
                            <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`} alt={element.title} />
                        )}
                        <h3>{element.title}</h3>
                        <h4>{element.author_name}</h4>
                        <p>Publish year: {element.first_publish_year}</p>
                        <p>Average rating: {element.ratings_average}</p>
                        {element.isbn? <p>ISBN:{element.isbn.length===13? element.isbn[0]: element.isbn[1]}</p> : <p>ISBN ikke tilgjengelig</p>}
                        <a href={amazonUrl}>Buy the book here</a>
                    </article>
                )
            })}
        </>
    )
}