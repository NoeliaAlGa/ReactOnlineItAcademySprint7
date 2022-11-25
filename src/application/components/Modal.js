import "./Modal.css"

export const Modal = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <label className="modal-container">
            {children} 
        </label>
    </article>
  )
}
