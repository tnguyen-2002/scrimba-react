export default function Entry(prop) {
    console.log(prop)
    return(
        <>
            <article className="entry">
                <div className="img-container">
                    <img src={prop.img.src} alt={prop.img.alt} />
                </div>
                <div className="content">
                    <span className="place-info">
                        <img src="src/images/marker.png" alt="japan-img" />
                        <p>{prop.location}</p>
                        <a href="#">View on Google Maps</a>
                    </span>
                    <h2 className="place-title">{prop.name}</h2>
                    <p className="place-date">{prop.date}</p>
                    <p className="place-desc">{prop.description}</p>
                </div>
            </article>

            <hr />
        </>
    )
}