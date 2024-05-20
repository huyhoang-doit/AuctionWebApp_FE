export default function Contact() {
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Umino's Breadcrumb Area End Here -->
        <!-- Begin Contact Main Page Area --> */}
            <div className="contact-main-page">
                <div className="google-map_area">
                    <div className="container-fluid">
                        <div id="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838709675939!2d144.95320007668528!3d-37.817246734238516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1670477011653!5m2!1sen!2sus"
                                style={{
                                    border: "0",
                                    width: "100%",
                                    height: "100%",
                                }}
                                // allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-page-side-content">
                                <h3 className="contact-page-title">
                                    Contact Us
                                </h3>
                                <p className="contact-page-message">
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram anteposuerit
                                    litterarum formas human.
                                </p>
                                <div className="single-contact-block">
                                    <h4>
                                        <i className="fa fa-fax"></i> Address
                                    </h4>
                                    <p>
                                        123 Main Street, Anytown, CA 12345 – USA
                                    </p>
                                </div>
                                <div className="single-contact-block">
                                    <h4>
                                        <i className="fa fa-phone"></i> Phone
                                    </h4>
                                    <p>Mobile: (08) 123 456 789</p>
                                    <p>Hotline: 1009 678 456</p>
                                </div>
                                <div className="single-contact-block last-child">
                                    <h4>
                                        <i className="fa fa-envelope-o"></i>{" "}
                                        Email
                                    </h4>
                                    <p>yourmail@domain.com</p>
                                    <p>support@hastech.company</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-content">
                                <h3 className="contact-page-title">
                                    Tell Us Your Message
                                </h3>
                                <div className="contact-form">
                                    <form
                                        id="contact-form"
                                        action="https://whizthemes.com/mail-php/mamunur/umino/umino.php"
                                    >
                                        <div className="form-group">
                                            <label>
                                                Your Name{" "}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="con_name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Your Email{" "}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                name="con_email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input
                                                type="text"
                                                name="con_subject"
                                            />
                                        </div>
                                        <div className="form-group form-group-2">
                                            <label>Your Message</label>
                                            <textarea name="con_message"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                value="submit"
                                                id="submit"
                                                className="umino-contact-form_btn"
                                                name="submit"
                                            >
                                                send
                                            </button>
                                        </div>
                                        <p className="form-message"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
