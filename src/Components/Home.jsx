import profileImage from '../assets/me.png'
const Home = () => {
    return (
        <div style={{ backgroundColor: "#0e0222ff" }} className='w-100'>
            <div className='container p-3'>
                <div className='my-5'>
                    <h6 style={{ marginLeft: "300px" }} className='text-white'>hello Iam <span style={{ color: "#600496ff" }}>Yadu</span></h6>
                    <div className='d-flex align-items-center'>
                        <img width={"258px"} height={"259px"} className='me-5' src={profileImage} alt="profile photo" />
                        <div>
                            <p className='text-white'>A Designer Who</p>
                            <h3 className='text-white'>Judges a Book</h3>
                            <h3 className='text-white'>By Its Cover</h3>
                            <p className='text-white' style={{ fontSize: "15px", letterSpacing: "-1.5px" }}>Because if the cover does not impress you what else can?</p>
                        </div>
                    </div>
                    <section className='about mb-5'>
                        <h1 className='text-white mb-5'>I'm a Software Engineer.|</h1>
                        <p className='text-white'>A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br /> I make meaningful and delightful digital products that create an equilibrium <br /> between user needs and business goals.</p>
                    </section>
                    <section className='my-5 work'>
                        <h1 className='text-white'>Work Experience</h1>
                        <div className="row text-center my-5">
                            <div className="col-6">
                                <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#260658ff"}}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Card title</h5>
                                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#260658ff"}}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Card title</h5>
                                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center my-5">
                            <div className="col-6">
                                <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#260658ff"}}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Card title</h5>
                                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#260658ff"}}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Card title</h5>
                                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='new my-5'>
                        <h2 className='text-white text-center'>I'm Currently Looking to join a cross-functional team</h2>
                        <h3 style={{letterSpacing:"-1px"}} className='text-center text-white'>that values improving peoples lives through accessible design</h3>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home