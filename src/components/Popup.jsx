
const Popup = () => {

    return(
        <>
        <button
        className="py-2 px-2 bg-highlight"
        onClick={()=>{
            window.open("/", "_Self")
        }}>
            Fab!
        </button>
        </>
    )
}

export default Popup