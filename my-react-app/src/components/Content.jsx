
export default function Content({content}) {
    return(
        <>
            {content?.map (element =>
                    <article key={element.key}>
                         {element.isbn && (
                        <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`} alt={element.title} />
                        )}
                        <h3>{element.title}</h3>
                        <p>{element.subtitle}</p>
                    </article>
                )}
        </>
    )
}
