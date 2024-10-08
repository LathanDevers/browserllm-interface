import PreRetrievalOptionsComponent from "./PreRetrievalOptionsComponent";
import RetrievalOptionsComponent from "./RetrievalOptionsComponent";
import PostRetrievalOptionsComponent from "./PostRetrievalOptionsComponent";
import GenerationOptionsComponent from "./GenerationOptionsComponent";
//import './AdvancedOptionsComponent.css';

function unhideAdvancedOptions() {
    const element=document.getElementById('advanced-options');
    if (element.style.display!=='flex') {
        element.style.display="flex";
    } else {
        element.style.display="none";
    }
}

function AdvancedOptionsComponent({setPreRetrievalOption, setRetrievalOption, setTopK, setSummary, setFusion, setRerank, setGenerationOption, setPresentationOption}){
    return(
        <div id="advanced-options-parent" className="flex flex-col ml-3 items-center">
            <button type="button" className="flex py-2 px-5 border hover:border-gray-300 border-white rounded w-[170px] bg-gray-50" onClick={unhideAdvancedOptions}>Advanced search</button>
            <div className="flex flex-row justify-center">
                <div id='advanced-options' className="min-[865px]:fixed max-[865px]:relative min-[865px]:flex-row max-[865px]:flex-col text-gray-800 bg-white hidden left-1/2 -translate-x-1/2 mt-10 border border-solid border-gray-300 rounded">
                    <PreRetrievalOptionsComponent setOptions={setPreRetrievalOption}/>
                    <RetrievalOptionsComponent setOptions={setRetrievalOption} setTopK={setTopK}/>
                    <PostRetrievalOptionsComponent setSummary={setSummary} setFusion={setFusion} setRerank={setRerank}/>
                    <GenerationOptionsComponent setOptions={setGenerationOption} setPresentationOption={setPresentationOption}/>
                </div>
            </div>
        </div>
    );
}

export default AdvancedOptionsComponent;