import Greeting from "../Greeting";
import ScrollableBox from "../ListItems/ScrollableBox";

const QuickSelect = () => {
    return (
        <>
            <h1> Quick Select </h1>
            <ScrollableBox children={[<Greeting />, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>, <Greeting/>]} />
        </>
        
    )
}

export default QuickSelect;