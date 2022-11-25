import { useModal } from "../hooks/useModal"
import { Modal } from "./Modal"
import {ButtonsStyle} from "./styled";

const Modals = ({id, value}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    const pActual = (id === "paginas") ? "páginas" : "idiomas";
    const texto = `En este componente debe indicar el número de ${pActual} que tendrá su sitio web. Actualmente a seleccionado: ${value} ${pActual}.`;
   
        return (
          <div>
              <ButtonsStyle onClick={openModal1}>?</ButtonsStyle>
              <Modal isOpen={isOpenModal1} closeModal ={closeModal1}>
                  {texto}
              </Modal>
          </div>
        )
}

export default Modals