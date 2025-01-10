/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

Contact.prototype = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default function Contact(props) {
    return (
        <>
            <article className="contact-card">
                <div className="img-container">
                <img
                    src= {props.img}
                    alt= {`Image of ${props.name}`}
                />
                </div>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img
                        src="src/images/call.png"
                        alt="phone icon"
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img
                        src="src/images/email.png"
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
        </>
    )
}

