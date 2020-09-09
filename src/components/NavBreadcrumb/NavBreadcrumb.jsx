import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../../styles/NavBreadcrumb.css";
const navBreadcrumb = () => {
    const currentUrl = window.location.href;
    const str = currentUrl.split("http://localhost:3000/")[1];
    const locationArray = str.split("/");
    let size = locationArray.length;
    if (locationArray[size - 1] === "") {
        locationArray.pop();
        size = size ? size - 1 : 0;
    }
    let basic = "/"
    return (

        <div className="container-fluid">
            <div className="row bread-color">
                <div className="col-md-2 location-part offset-md-2">
                    {size !== 0 ? locationArray[locationArray.length - 1] : "Home"}
                </div>
                <div className="col-md-4 offset-md-4">
                    <Breadcrumb className="bg-dark">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        {locationArray && locationArray.map((l, index) => {
                            basic = basic + l + "/";
                            return (
                                <Breadcrumb.Item key={index} href={basic} active={index === size - 1}> {l}</Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
}
export default navBreadcrumb;