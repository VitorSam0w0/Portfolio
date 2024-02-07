import Image from "next/image"
import loading from "../img/loading.png"

const Loading = () => {return( <div className="flex justify-center"><Image className="animate-spin w-20 h-20 md:min-w-40 md:min-h-40" src={loading} alt="Site em contrução"></Image></div>)}

export default Loading