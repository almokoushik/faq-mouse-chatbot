import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const Cursore = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={30}
                color='159,112,6'
                outerAlpha={0.2}
                innerScale={3}
                outerScale={5}
            ><h1></h1></AnimatedCursor>
        </div>
    );
};

export default Cursore;