import React from 'react';
import ("./InstagramFeed.scss")

class InstagramFeed extends React.Component {

    state = {
        instagramJson: ["loading"],
        isLoading: true,
        error: null
    }

    componentDidMount() {
        console.log("component did mount");

        this.setState({
            isLoading: true
        })

        const instagramQuery = "https://api.instagram.com/v1/users/self/media/recent/?=&access_token="
        const accessToken = "54328625.1677ed0.79fea6deb9ca4e62accebb6a54643e43"

        fetch(`${instagramQuery+accessToken}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    instagramJson: data,
                    isLoading: false
                })
                // .catch(error => this.setState({ isLoading: false }))

            )

    }

    componentDidUpdate() {
        console.log("component updated")

    }

    componentWillUpdate() {

    }





    render() {
        const { isLoading, error } = this.state
        let InstagramJsonData = this.state.instagramJson.data
        // console.log(this.state.isLoading)


        if (isLoading) {
            return (
                <div className="loadingScreen">
                    <div className="LoadingWidgetContainer">
                        <div className="loadingWidget">
                            <img src={require('../../images/Instagram_icon.png')} alt="Instagram-Logo" />
                            <p>loading...</p>
                        </div>
                    </div>
                </div>)
        }

        if (error) {
            return (
                <div>
                    <p>
                        Loading Error. Please Try Again Later.

                    </p>
                </div>)
        }

        else {

            let instagramContent = InstagramJsonData.map((image) => (

                <div className="imageContainer" key={image.id}>
                    <a href={image.link} aria-label="Go To Instagram Post">
                        <div className="imageFill"></div>
                        <img
                            src={image.images.thumbnail.url}
                            srcSet={`
                                    ${image.images.thumbnail.url} 375w,
                                    ${image.images.low_resolution.url} 767w,
                                    ${image.images.standard_resolution.url} 1200w,
                                    `}
                            alt="Instagram"
                        />
                        <div className="imageStats">
                            <span>
                                <svg width="14px" height="14px" viewBox="0 0 788 726" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="true" xlink="http://www.w3.org/1999/xlink">
                                    <g id="Blog" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Artboard" transform="translate(-264.000000, -164.000000)" fill="#FFFFFF">
                                            <g id="Group" transform="translate(657.500000, 400.500000) rotate(315.000000) translate(-657.500000, -400.500000) translate(313.000000, 51.000000)">
                                                <rect id="Rectangle" stroke="#979797" x="1.71468273" y="233.942172" width="464" height="464"></rect>
                                                <circle id="Oval" cx="233.007576" cy="233.304041" r="232.5"></circle>
                                                <circle id="Oval" cx="456.195959" cy="465.684812" r="232.5"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                                {image.likes.count}
                            </span>
                            <span>

                                <svg width="18px" height="14px" viewBox="0 0 1006 714" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="true" xlink="http://www.w3.org/1999/xlink">
                                    <g id="Blog" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Artboard" transform="translate(-196.000000, -167.000000)" fill="#FFFFFF">
                                            <g id="Group" transform="translate(98.000000, 167.000000)">
                                                <ellipse id="Oval" cx="649.5" cy="315" rx="454.5" ry="315"></ellipse>
                                                <polygon id="Triangle" transform="translate(245.500000, 589.500000) rotate(230.000000) translate(-245.500000, -589.500000) " points="245.5 397 397 782 94 782"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                {image.comments.count}
                            </span>
                        </div>
                    </a>
                </div>


            ))
            return (<div className="instagramApp">{instagramContent}</div>)

        }


    }
}

export default InstagramFeed
