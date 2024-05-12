import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body  from "./component/Body";

// import Star from "C:\Users\atulc\Downloads\food logo.jpg";







const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};

// ReactDOM.render(<AppLayout />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
