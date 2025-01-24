import Image from "next/image"
import kantor from  "@/assets/login/kantor.png"
import LoginForm from "@/components/Login/LoginForm"


const Page = () => {
    return(
        <div className="my-11 mx-7 grid grid-cols-2 justify-items-center justify-self-center items-center">
            <Image
                src={kantor}
                width={414}
                alt="kantor"
            />
            <LoginForm/>
        </div>
    )
}

export default Page