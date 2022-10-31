import infoSVG from "../../img/info.svg"
import closeInfoSVG from "../../img/closeInfo.svg"
import { useState } from 'react';

export default function Info(){
    const [infoClicked, setInfoClicked] = useState(false);
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
        marginBottom: "100px"
    }

    function showHideInfo(){
        setInfoClicked(infoClicked ? false : true)

    }

    return(
        <>
            <img src={infoClicked ? closeInfoSVG : infoSVG} alt="info" style={infoButton} onClick={showHideInfo}/>
            <div style={infoClicked ? infoContainer : hide}>
                <div style={infoContent}>
                    <h1>Dear Value, </h1>
                    <p>
                        Sed imperdiet eros maximus, faucibus ante eu, eleifend metus. Vivamus semper mauris in sodales pellentesque. Aliquam suscipit lacus sit amet tellus dignissim, non laoreet quam vulputate. Morbi in libero tortor. Praesent fringilla erat lectus, vitae consequat est consequat ut. Maecenas ligula nunc, egestas eu efficitur efficitur, gravida sed purus. Aliquam a ante viverra, dignissim ex vitae, imperdiet tortor. Integer ut leo ac massa convallis venenatis in sed massa. Donec ultrices faucibus massa. Nam tincidunt lorem ut ante ullamcorper porttitor. Duis eleifend dolor id dolor pretium pharetra. Aliquam risus odio, laoreet vel lacinia sit amet, sodales id enim. Nunc vel tempus felis, ac pharetra quam. Quisque interdum dignissim enim. Nulla semper placerat magna, sed efficitur massa malesuada non. Vivamus at metus congue, accumsan lacus consequat, tristique magna.
                        Sed imperdiet eros maximus, faucibus ante eu, eleifend metus. Vivamus semper mauris in sodales pellentesque. Aliquam suscipit lacus sit amet tellus dignissim, non laoreet quam vulputate. Morbi in libero tortor. Praesent fringilla erat lectus, vitae consequat est consequat ut. Maecenas ligula nunc, egestas eu efficitur efficitur, gravida sed purus. Aliquam a ante viverra, dignissim ex vitae, imperdiet tortor. Integer ut leo ac massa convallis venenatis in sed massa. Donec ultrices faucibus massa. Nam tincidunt lorem ut ante ullamcorper porttitor. Duis eleifend dolor id dolor pretium pharetra. Aliquam risus odio, laoreet vel lacinia sit amet, sodales id enim. Nunc vel tempus felis, ac pharetra quam. Quisque interdum dignissim enim. Nulla semper placerat magna, sed efficitur massa malesuada non. Vivamus at metus congue, accumsan lacus consequat, tristique magna.
                        Sed imperdiet eros maximus, faucibus ante eu, eleifend metus. Vivamus semper mauris in sodales pellentesque. Aliquam suscipit lacus sit amet tellus dignissim, non laoreet quam vulputate. Morbi in libero tortor. Praesent fringilla erat lectus, vitae consequat est consequat ut. Maecenas ligula nunc, egestas eu efficitur efficitur, gravida sed purus. Aliquam a ante viverra, dignissim ex vitae, imperdiet tortor. Integer ut leo ac massa convallis venenatis in sed massa. Donec ultrices faucibus massa. Nam tincidunt lorem ut ante ullamcorper porttitor. Duis eleifend dolor id dolor pretium pharetra. Aliquam risus odio, laoreet vel lacinia sit amet, sodales id enim. Nunc vel tempus felis, ac pharetra quam. Quisque interdum dignissim enim. Nulla semper placerat magna, sed efficitur massa malesuada non. Vivamus at metus congue, accumsan lacus consequat, tristique magna.
                    </p>
                    <h2>Impressum - Angaben gemäß § 5 TMG </h2>
                    <p>
                        egozen collective <br/>
                        Karlstr. 25<br/>
                        63065 Offenbach<br/>
                    </p>

                    <h3>Kontakt</h3>
                    <p>
                    hello@egozen.org <br/><br/>
                    </p>

                    <h2>Datenschutz</h2>
                    <h4>Allgemeine Hinweise</h4>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                    <h4>Datenerfassung auf dieser Website</h4>
                    <p>
                        Eine Erfassung von Daten erfolgt zu meist automatisch, sobald Sie eine Website betreten. In der Regel handelt es sich um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Oft werden personenbezogene Daten an Dritte weitergegeben (z.B. Google, Facebook).
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                    <p>
                        Diese Web-Applikation speichert kein personenbezogene Daten oder Cookies. 
                        Es werden keine Daten an Dritte weitergegeben.
                    </p>
                </div>
            </div>
        </>
    )
}