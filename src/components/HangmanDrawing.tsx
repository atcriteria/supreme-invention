const HEAD = (<div style={{ width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30px" }} />)
const BODY = (<div style={{ width: "10px", height: "100px", background: "black", position: "absolute", top: "120px", right: 0 }} />)
const ARM_RIGHT = (<div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "125px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom" }} />)
const ARM_LEFT = (<div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "125px", right: "10px", rotate: "30deg", transformOrigin: "right bottom" }} />)
const LEG_RIGHT = (<div style={{ width: "120px", height: "10px", background: "black", position: "absolute", top: "210px", right: "-110px", rotate: "60deg", transformOrigin: "left bottom" }} />)
const LEG_LEFT = (<div style={{ width: "120px", height: "10px", background: "black", position: "absolute", top: "210px", right: "0", rotate: "-60deg", transformOrigin: "right bottom" }} />)


export default function HangmanDrawing() {

    return <div style={{ position: "relative" }}>
        {HEAD}{BODY}{ARM_LEFT}{ARM_RIGHT}{LEG_RIGHT}{LEG_LEFT}
        {/* Hanging bar */}
        <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: "0", right: "0" }} />

        {/* Top bar */}
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />

        {/* center bar */}
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />

        {/* bottom bar */}
        <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
}