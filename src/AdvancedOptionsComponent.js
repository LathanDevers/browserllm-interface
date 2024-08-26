import PreRetrievalOptionsComponent from "./PreRetrievalOptionsComponent";
import RetrievalOptionsComponent from "./RetrievalOptionsComponent";
import PostRetrievalOptionsComponent from "./PostRetrievalOptionsComponent";
import GenerationOptionsComponent from "./GenerationOptionsComponent";
//import './AdvancedOptionsComponent.css';

function unhideAdvancedOptions() {
    const element=document.getElementById('advanced-options')
    if (element.style.display!=='flex') {
        element.style.display="flex"
    } else {
        element.style.display="none"
    }
}

function AdvancedOptionsComponent(){
    return(
        <div id="advanced-options-parent" className="flex flex-col ml-3 items-center">
            <button type="button" className="flex py-2 px-5 border hover:border-gray-300 border-white rounded" onClick={unhideAdvancedOptions}>Advanced search</button>
            <div id='advanced-options' className="flex-col text-gray-800 bg-white hidden p-5">
                <PreRetrievalOptionsComponent/>
                <RetrievalOptionsComponent/>
                <PostRetrievalOptionsComponent/>
                <GenerationOptionsComponent/>
            </div>
        </div>
    );
}

export default AdvancedOptionsComponent;