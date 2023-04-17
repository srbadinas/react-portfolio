export default function Modal({ showModal, onHandleCloseModal, body }) {
    return (
        <div className="modal-overlay fixed flex justify-center py-6 overflow-y-auto overflow-x-hidden bg-black/50 w-screen h-screen top-0 left-0 z-[49] transition delay-0 duration-300 xl:px-6" style={{ visibility: (showModal ? 'visible' : 'hidden'), opacity: (showModal ? '1' : '0') }}>
            <div className="modal-dialog bg-dark-1 min-h-[550px] rounded shadow-sm z-[50] h-max max-w-[90%] xl:max-w-[1170px]" style={modalDialogStyles}>
                <div className="modal-content">
                    <div className="modal-header p-3">
                        <div className="flex justify-end">
                            <button type="button" className="flex text-slate-100 modal-close-btn hover:text-slate-400" onClick={(e) => onHandleCloseModal(e)}><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="modal-body pb-10 px-10">
                       {body}
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    )
}

const modalDialogStyles = {
    // transform: 'translate(-50%, 0%)'
}