export default function Toolbar(props){
    return(
        <div id="Toolbar">
            <img src="../docs.png" />
            <span id="docTitle">{props.title}</span><br/>
            {["File","Edit","View","Insert","Format","Tools","Extensions","Help"].map((tools) => (
                <ul type="none" id="tools">
                <li>{tools}</li>
                </ul>
            ))
        }
        <button id="share">Share</button>
        </div>
    )
}