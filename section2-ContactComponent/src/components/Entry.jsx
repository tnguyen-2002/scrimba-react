export default function Entry(prop) {
    return(
        <>
            <article className="entry">
                <div className="img-container">
                    <img src="src/images/mount-fuji.jpeg" alt={`Image of ${prop.name}`} />
                </div>
                <div className="content">
                    <span className="place-info">
                        <img src="src/images/marker.png" alt="japan-img" />
                        <p>{prop.location}</p>
                        <a href="#">View on Google Maps</a>
                    </span>
                    <h1 className="place-title">{prop.name}</h1>
                    <p className="place-date">{prop.date}</p>
                    <p className="place-desc">{prop.description}</p>
                </div>
            </article>
        </>
    )
}