/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

// Contact.prototype = {
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
// }

export default function Contact({img, name, phone, email}) {
    return (
        <>
            <article className="contact-card">
                <div className="img-container">
                <img
                    src= {img}
                    alt= {`Image of ${name}`}
                />
                </div>
                <h3>{name}</h3>
                <div className="info-group">
                    <img
                        src="src/images/call.png"
                        alt="phone icon"
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img
                        src="src/images/email.png"
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
        </>
    )
}

