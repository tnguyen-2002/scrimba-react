export default function Contact() {
    return (
        <>
            <article className="contact-card">
            <img
                src="src/images/shinji-akari.png"
                alt="Photo of Shinji"
            />
            <h3>Shinji Ikari</h3>
            <div className="info-group">
                <img
                    src="src/images/call.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img
                    src="src/images/email.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
        </>
    )
}