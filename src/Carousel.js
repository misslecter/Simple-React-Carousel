import React, {Component} from 'react';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemCount: props.children.length,
            active: 0
        };
        this.timer = this.timer.bind(this);
        this.slide = this.slide.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
        // AUTOPLAY
        setInterval(this.timer, 2000);
    }

    timer() {
        this.slide('next');
    }

    slide(target) {
        let slide = 0;
        if (target === 'next') {
            // Next slide
            slide = (this.state.active + 1) % this.state.itemCount;
        } else if (target === 'prev') {
            // Prev slide
            slide = this.state.active - 1;
            if (slide < 0) {
                slide = this.state.itemCount - 1;
            }
        } else {
            // Specific slide
            slide = target;
        }
        this.setState({active: slide})
    }

    handleKeyDown(event) {
        if (event.keyCode === 37) {
            // Left
            this.slide('prev');
        } else if (event.keyCode === 39) {
            // Right
            this.slide('next');
        }
    }

    render() {
        const children = this.props.children.map((child, index) =>
            <div key={index} className={"Carousel-Item" + (index === this.state.active ? ' active' : '')}>{child}</div>
        );
        const dots = this.props.children.map((child, index) =>
            <button key={index} onClick={() => this.slide(index)}
                    className={"Carousel-Dot" + (index === this.state.active ? ' active' : '')}> </button>
        );
        return (
            <div className="Carousel">
                <div className="Carousel-Content">
                    {children}
                </div>
                <div className="Carousel-Navigation">
                    <button onClick={() => this.slide('prev')} className="left"> ←</button>
                    <button onClick={() => this.slide('next')} className="right"> →</button>
                </div>
                <div className="Carousel-Dots">
                    {dots}
                </div>
            </div>
        )
    }
}

export default Carousel;