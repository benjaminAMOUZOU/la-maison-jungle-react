import logo from '../assets/logo.png'

function Header() {
    const titre = 'La maison jungle'
    return (
        <div className="row pt-4">
            <div className="col-lg-12">
                <div className="alert alert-success">
                    <div className="text-end">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 32, height: 32 }}
                        />
                        <span className="fw-bold">{titre.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
