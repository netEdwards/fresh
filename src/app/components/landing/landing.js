import Image from "next/image"
import li from "src/app/media/li2EDITED.png"

export default function LandingOne(){

    return(

        <div className="outerdiv">

            <div className="innerdiv">
                {/* <img src={li}></img> */}
                <Image
                src={li}
                alt="Picture of Creativity concept in dystopian planet."
                width={500}
                height={800}
                />
            </div>

        </div>


    )

}