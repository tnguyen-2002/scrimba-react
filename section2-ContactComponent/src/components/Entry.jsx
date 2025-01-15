export default function Entry(prop) {
    return(
        <>
           <article className="entry">
                <div className="img-container">
                    <img src={prop.img.src} alt={prop.img.alt} />
                </div>
                <div className="main-article">
                    <div className="place-info">
                        <img src="src/images/marker.png" alt="" />
                        <p>{prop.country}</p>
                        <a href={prop.googleMapsLink}>Views on Google Maps</a>
                    </div>
                    <h2>{prop.title}</h2>
                    <p className="trip-date">{prop.dates}</p>
                    <p className="place-desc">{prop.placeDesc}</p>
                </div>
           </article>
           <hr className="break-line"/>
        </>
    )
}