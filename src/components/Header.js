import logo from '../assets/logo.png'
import react from '../assets/react.svg'

function Header() {
    const titre = 'La maison jungle'
    return (
        <div className="row pt-4">
            <div className="col-lg-12">
                <div className="alert alert-success">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img src={react} alt="logo react" style={{ width: 40, height: 36 }} />
                        </div>
                        <div>
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
        </div>
    )
}

export default Header
