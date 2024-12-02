import {HashLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <HashLoader color="#e3d6c1" size="90" />
        </div>
    )
}