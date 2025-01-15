export default function Entry(prop) {
    return(
        <>
           <article className="entry">
                <div className="img-container">
                    <img src={prop.entry.img.src} alt={prop.entry.img.alt} />
                </div>
                <div className="main-article">
                    <div className="place-info">
                        <img src="src/images/marker.png" alt="" />
                        <p>{prop.entry.country}</p>
                        <a href={prop.entry.googleMapsLink}>Views on Google Maps</a>
                    </div>
                    <h2>{prop.entry.title}</h2>
                    <p className="trip-date">{prop.entry.dates}</p>
                    <p className="place-desc">{prop.entry.placeDesc}</p>
                </div>
           </article>
           <hr className="break-line"/>
        </>
    )
}