import "../assets/css/complement.css"

const ErrorModal = (props) => {
    return (
        <div className="modal">
            <header>
                <h2 className="bkg-rose">{props.title}</h2>
            </header>
            <div>
                <p>{props.message}                    
                </p>
            </div>
            <footer>
                <button>OK</button>
            </footer>
        </div>
        
    )
}
export default ErrorModal