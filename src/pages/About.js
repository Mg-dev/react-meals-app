

const About = () => {
    return (
        <div className="container">
            <section className="position-relative" style={{top: "50px"}}>
                <div className="fs-1">Nice to Meet You..</div>
                <div className="row rounded-5 bg-dark text-light p-3">
                    <div className="col-6 py-2 d-flex justify-content-start mt-5 flex-column ">
                        <div className="col-11">
                        <div className="fs-2 mb-3">Hello!</div>
                        <p className="text-muted">Welcome to Meal App, your one-stop-shop for all your food cravings. Whether you're in the mood for a juicy burger, a delicious pasta dish, or a healthy salad, we've got you covered. With just a few clicks, you can order food from your favorite restaurants and have it delivered right to your door.</p>
                        <p className="text-muted">We understand that with busy schedules and fast-paced lifestyles, finding the time to cook or go out to eat can be a challenge. That's why we've made it our mission to make food ordering easy, convenient, and accessible to everyone. Our user-friendly platform allows you to browse menus, compare prices, and order food from multiple restaurants in just a few minutes.</p>
                        </div>
                    </div>
                    <div className="col-6">
                       <div className="d-flex justify-content-end">
                            <img width="100%" className="mt-2 img-thumbnail rounded-5" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="meal app about page photo"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" position-relative" style={{top: "100px"}}>
                <div className="row rounded-5 bg-dark text-light p-3">
                    
                    <div className="col-6">
                       <div className="d-flex justify-content-start">
                            <img width="100%" className="mt-2 img-thumbnail rounded-5" src="https://images.pexels.com/photos/2662878/pexels-photo-2662878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="meal app about page photo"/>
                        </div>
                    </div>
                    <div className="col-6 py-2 d-flex justify-content-start mt-5 flex-column ">
                        <div className="col-11">
                        <p className="text-muted">So sit back, relax, and let us handle the rest. Our team of dedicated foodies works around the clock to bring you the best dining options, with a focus on quality, variety, and affordability. Whether you're in the mood for a quick bite or a full-fledged feast, we've got you covered. Join us on our food journey today and discover a world of delicious possibilities!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About