import { PiPhoneCallDuotone } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
export default function Contact() {
    return (
        <div className="bg-black bg-opacity-30 ">
            <h1 className="text-white text-4xl flex justify-center ">¿Tienes problemas con el sitio?, puedes contactarte aqui  <MdMessage /></h1>
            <p className="text-white text-xl flex justify-center " >
                <PiPhoneCallDuotone /> Número: +56938313748
            </p>
            <p className="text-white text-xl flex justify-center ">
                <MdOutgoingMail /> Correo: MountainHeat@gmail.com
            </p>

        </div>
    )
}