import React from 'react'

function Gallery() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg p-0 m-0">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><u>Photo Gallery</u></a>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto">
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <button className="btn" type="submit">MORE ARTICLES</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <b><hr /></b>
                        <div className="row">
                        <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/12/04/28625.jpg&w=400&q=100&f=jpgg" alt="" /></div>
                                    <b><p>In Pictures: Snow blanketed Humla village</p></b>
                                </div>
                                <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/12/01/28576.jpg&w=400&q=100&f=jpg" alt="" /></div>
                                    <b><p>In Pictures: Nepal's first same-sex marriage couple</p></b>
                                </div>
                                <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/12/01/28567.jpg&w=400&q=100&f=jpg" alt="" /></div>
                                    <b><p>In Picture: A view of Kathmandu Valley from Dakhshinkali hill</p></b>
                                </div>
                                <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/11/28/28499.jpg&w=400&q=100&f=jpg" alt="" /></div>
                                    <b><p>Breathtaking mountain landscapes: Mesmerizing Himalayan views captured</p></b>
                                </div>
                                <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/11/26/28428.jpg&w=400&q=100&f=jpg" alt="" /></div>
                                    <b><p>In Pictures: Abandoned Majhgaon Airport in Kanchanpur</p></b>
                                </div>
                                <div className="col-4">
                                    <div className="imag"><img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2023/11/23/28372.jpg&w=400&q=100&f=jpgg" alt="" /></div>
                                    <b><p>In Pictures: Preparing Chookha</p></b>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            
        </>
    )
}

export default Gallery