import Greeting from "../components/Greeting";
import Video from "../components/Video";

const LandingPage = ()=>{
    return (
        <>
           <div className="align-center mt-10">
                <Greeting/>
                <Video />
           </div>
        </>
    )
}

export default LandingPage;