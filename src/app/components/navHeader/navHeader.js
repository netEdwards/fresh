import Link from "next/link"

export default function NavOne(){
    return(
        <nav>
            <div className="name">
                <h1 id="nText">↑</h1>
            </div>
            <div className="bCont">
                <button><Link href={"/app/page.js"}>FEED</Link></button>
                <button><Link href={"/app/page.js"}>MYTHOS</Link></button>
            </div>
        </nav>
    )

}