import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const One = () => {
    return (
        <div>
            <div> 1 </div>
            <div>
                <Link to={'/login'}>ログインへ</Link>
            </div>
        </div>
    );
};

export default One
