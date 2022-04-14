import React, { Component } from 'react';
import './memeGenerator.css'

class MemeGenerator extends Component {
        state = { 
            toptext: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
            const {memes} = response.data
            this.setState({allMemeImages: memes})
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randImg = this.state.allMemeImages[randNum].url
        this.setState({randomImage: randImg})
    }

    render() { 
        return (
            <div className='meme-section'>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input type="text"
                        name='topText' value={this.state.topText}
                        onChange={this.handleChange} placeholder="Top Text"/>
                    <input type="text" name='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="Bottom Text"
                    />
                    <button className='gen-btn'>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} />
                    <h2 className='meme-toptext'>{this.state.topText}</h2>
                    <h2 className='meme-bottomtext'>{ this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}
 

export default MemeGenerator;