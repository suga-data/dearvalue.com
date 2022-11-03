import infoSVG from "../../img/info.svg"
import closeInfoSVG from "../../img/closeInfo.svg"
import { useState, useRef } from 'react';
import generetedText from '../../json/text.json'
// import patentImage from '../../img/patens_thermo_print.png'

export default function Info(){
    const [infoClicked, setInfoClicked] = useState(false);
    const dearValueRef = useRef(null)
    const generatedTextContainer = useRef(10)

    const infoButton = {
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 100,
        width: "30px",
        height: "30px",
        margin: "20px",
        textAlign: "center",
    }
    const infoContainer = {
        zIndex: 10,
        position: "fixed",
                // width:"80vw", 
        // height:"auto", 
        backgroundColor:"white", 
        // opacity: 0.5,
        // margin: "20px",
        // display: "flex",
        width: "100vw",
        height: "100vh",
        maxWidth: "600px",
        // justifyContent: "center",
        // alignItems: "center",
        // padding: "20px",
        borderStyle: "solid",
        overflowY:"scroll",
        overflowX:"hidden",
    }
    const hide = {
        display: "none",
    }
    const infoContent = {
        margin: "20px",
        marginBottom: "100px",

    }
    const newTextButtonParent = {
        width: "100%",
        textAlign: "center",
        marginTop: "50px",
    }
    const newTextButton = {
        backgroundColor: "white",
        // padding: "10px",
        curser: "default",
        display: "inline-block",
        verticalAlign: "top",
        margin: "20px",
        fontSize: "20px"
    }

    // const center = {
    //     display: "inline-block",
    //     verticalAlign: "top",
    //     width: "100%"
    // }

    
    
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    
    const [num, setNum] = useState(0);
    // const [maxGentTextHeight, setMaxGenTextHeight] = useState();
    
    const textContainer = {
        // height: genTextHeight + "px",
        // height: "60px",
        color: "black",
        overflow: "hidden",
    }
    const genTextChild = {
        // height: maxGentTextHeight + "px",
        // color: "black",
    }
    
    function showHideInfo(){
        newText();
        setInfoClicked(infoClicked ? false : true)
    }
    
    function newText(){
        // define random number
        setNum(randomNumberInRange(0, generetedText.length-1));
        // read height of text container
        // const distanceTop = generatedTextContainer.current.getBoundingClientRect().top;
        // const distanceBottom = generatedTextContainer.current.getBoundingClientRect().bottom;
        // const sizeOfContainer = distanceBottom - distanceTop;
        // setMaxGenTextHeight(sizeOfContainer)
        // console.log("height of Container: " + maxGentTextHeight)
        dearValueRef.current.scrollIntoView();
    }
        






    return(
        <>
            <img className="infoImage" src={infoClicked ? closeInfoSVG : infoSVG} alt="info" style={infoButton} onClick={showHideInfo}/>
            <div  style={infoClicked ? infoContainer : hide}>
                <div ref={dearValueRef} style={infoContent}>
                    <h1 >Dear Value, </h1>
                    <div className="letter" style={textContainer}> 
                        <p  ref={generatedTextContainer} style={genTextChild}>
                            {generetedText[num].output}
                        </p>
                        <p>Sincerely, me</p>
                    </div>
                    <div style={newTextButtonParent}>
                        <button style={newTextButton} onClick={newText}>re-calculate value</button>
                    </div>

                    {/* <h2>Datenschutz</h2> */}
                    {/* <h4>Allgemeine Hinweise</h4>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p> */}
                    {/* <img src={patentImage} style={center} alt="patentImage"/> */}
                    <h4>Datenerfassung auf dieser Website</h4>
                    <p>
                        Eine Erfassung von Daten erfolgt zu meist automatisch, sobald Sie eine Website betreten. In der Regel handelt es sich um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Oft werden personenbezogene Daten an Dritte weitergegeben (z.B. Google, Facebook).
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                    <p>
                        Diese Web-Applikation speichert kein personenbezogene Daten oder Cookies. 
                        Es werden keine Daten an Dritte weitergegeben.
                    </p>


                    <h4>Impressum - Angaben gemäß § 5 TMG </h4>
                    <p>
                        egozen collective <br/>
                        Karlstr. 25<br/>
                        63065 Offenbach<br/>
                    </p>
                    <h4>Vertreten durch</h4>
                    <p>
                        Armin Arndt, Beatrice Bianchini, Valeria Castaño Moreno, Roberto Lorenzon, Erika Lowin & Ken Rodenwaldt
                    </p>

                    <h4>Kontakt</h4>
                    <p>
                    hello@egozen.org <br/><br/>
                    </p>

                </div>
            </div>
        </>
    )
}