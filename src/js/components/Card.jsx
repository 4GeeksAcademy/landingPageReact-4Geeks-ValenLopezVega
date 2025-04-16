export function Card({cardDetail}) {
    return (
        <div className="col-sm-12 col-md-3 mb-4">
            <div className="card">
                <img src="https://www.gnrgindustrial.com/images/blog/1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{cardDetail.title}</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer bg-light py-3 text-center">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}