import React from "react";
import LoadingCSS from "./LoadingPage.module.scss"


const LoadingPage = () => {
    return(
        <div className={LoadingCSS.LoadingPage}>
            <div className={LoadingCSS.LoadingPage__container}>
            loading....
            </div>
        </div>
    )
}

export default LoadingPage;