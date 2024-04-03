export default function Bookcards({ bookcards }) {
    return (
        <>
            {bookcards?.map(element => {
                const amazonUrl = `https://www.amazon.com/s?k=${element.id_amazon}`
                return (
                    <article key={element.key}>
                        {element.isbn && (
                            <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`} alt={element.title} />
                        )}
                        <h3>{element.title}</h3>
                        <h4>{element.author_name}</h4>
                        <p>Publish year: {element.first_publish_year}</p>
                        <p>Average rating: {element.ratings_average}</p>
                        <a href={amazonUrl}>Buy the book here</a>
                    </article>
                )
            })}
        </>
    )
}