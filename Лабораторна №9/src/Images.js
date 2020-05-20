import React, { Component } from 'react';
import './App.css';
import './Images.css'
import Popup from "./Popup"


class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            imageUrlArray: [
                "https://cdnmyslo.ru/BlogArticle/53/07/5307cf68-0d29-4c33-8d01-578e511e957e_1.jpg",
                "https://www.roadaffair.com/wp-content/uploads/2017/09/santorini-greece-shutterstock_562590757-1024x683.jpg",
                "https://www.azamara.com/sites/default/files/heros/jr-1-aug-2020-paros-greece-1800x1000_0.jpg",
                "https://vinzite.com/wp-content/uploads/2018/05/Santorini-Greece-1.jpg",
                "https://www.europeexpress.com/stw/EEI/Pics/kefalonia-greece.jpg",
                "https://www.tripsavvy.com/thmb/iBEP9HKbKFPCtMgSLo74JWoW7WI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/154103686-56a3b15d3df78cf7727e9fc3.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfcFhqa5V9QgDhFwuzYmtcHja45beF6O3jbOi6DSL95Hvn6Ts2&usqp=CAU"

            ],
            showModal: false,
            popImageUrl: ""
        }
    }
    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }

    imageDeletter(url, e) {
        let imageUrlsArray = this.state.imageUrlArray;
        let indexSplice = imageUrlsArray.indexOf(url)
        imageUrlsArray.splice(indexSplice, 1)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }


    ttt = (smth1, smth2) => {
        this.imageDeletter(smth1, smth2)
        this.handlePopup()
    }


    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return ( <
                img className = "singleImage"
                src = { url }
                key = { index }
                onClick = {
                    () => this.handlePopup(url)
                }
                />
            )
        })
        return ( < div className = "Images" >
            <
            form onSubmit = { this.imageSubmitter } >
            <
            input type = "text"
            placeholder = "Введите url картинки"
            onChange = { this.handleLinkChange }
            /> <button type = "Submit"
            class = "SubmitButton" > Подтвердить < /button> </form > { images } {
                this.state.showModal ? ( <
                    Popup popImageUrl = { this.state.popImageUrl }
                    closePopup = { this.handlePopup }
                    deleteImage = { this.ttt.bind(this, this.state.popImageUrl) }
                    />
                ) : null
            } <
            /div>
        );
    }
}

export default Images;