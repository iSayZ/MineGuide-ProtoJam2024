import "./Popup.css"

function Popup({ info, toggle }) {

    return (
        <>
            <div className="popup_container">
                <div className="popup">
                <div className="btn_small popup_exit" onClick={toggle}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
                <p>{info}</p>
                </div>
            </div>
        </>
    )
}

export default Popup;