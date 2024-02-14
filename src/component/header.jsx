import { useEffect, useState } from "react"
import "../css/header.css"
export default function Header() {
    const [flag, setFlag] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedFlag, setSelectedFlag] = useState("")
    useEffect(() => {
        //flages of countries
        fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json").then((res) => res.json()).then((data) => {
            setFlag(data)
            setSelectedFlag(data[0].image)
        })
    }, [])
    return (
        <div className="header full-width">
            <div className="container flex" style={{justifyContent:"flex-end"}}>
                <div className="flags">
                    <div className="flag-selected" >
                        <span>All advantages</span>
                        <img src={selectedFlag} alt="" width={"30px"} height={"30px"} style={{ float: "right" }} onClick={() => {
                            open ? setOpen(false) : setOpen(true)
                        }} />
                    </div>
                    <div className="flag-list" style={{ display: open ? "block" : "none" }}>
                        {flag.map((i) => {
                            return (
                                <div key={i.code} className="flag" onClick={() => {
                                    setSelectedFlag(i.image)
                                    setOpen(false)
                                }}>
                                    {
                                        <><span>{i.name}</span><img src={i.image} alt="" width={"30px"} height={"30px"} style={{ float: "right" }} /></>}
                                </div>)
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}