import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';


const Two = () => {
    return (
        <div>
            <div> 2 </div>
            <div>
                <Link to={'/'}>ホームへ</Link>
            </div>
        </div>
    );
};

export default Two
