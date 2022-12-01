import React from 'react'

class SliderDouble extends React.Component {
    constructor(props){
        super(props)
        this.state={    borneMini:'2000',
                        borneMaxi:'80000',
                        valeurMini:'2000',
                        valeurMaxi:'80000',
                        minpct:'0',
                        maxpct:'100'
                    }
        this.changeMini =this.changeMini.bind(this)
        this.changeMaxi =this.changeMaxi.bind(this)
        this.barreSelection = this.barreSelection.bind(this)
        this.verifiePosition =this.verifiePosition.bind(this)
    }

    pourcentagetoValeur(pct){
        return  Math.round( this.state.borneMaxi*pct/100)
    }
    barreSelection() {
        var track =document.getElementById('trackSelection')
        track.style.left=this.state.minpct+'%'
        track.style.width=(this.state.maxpct-this.state-this.state.minpct)+'%'
    }     
    verifiePosition(){
        var m=this.state.minpct
        var x=this.state.maxpct
        if (m>x) {
            this.setState({minpct: x, 
                            maxpct: m
                          })
        }
        this.barreSelection()
    }
    changeMini(event){
        var v=event.target.value
        var r=this.state.borneMini //par défault pour ne pas avoir de valeur nulle
        if (v>0){ r=this.pourcentagetoValeur(v)}
        this.setState({minpct: v,
                       valeurMini: r})
        this.verifiePosition()
    }
    changeMaxi(event){
        var v=event.target.value
        var r=this.state.borneMaxi //par défault pour ne pas avoir de valeur supérieure au maxi
        if (v>0){ r=this.pourcentagetoValeur(v)}  
        this.setState({maxpct: v,
                       valeurMaxi: r})
        this.verifiePosition()
    }
    render(){
        return(
            <div>
                <div className='sliderDouble' >
                    <div className='track'></div> {/* track*/}
                    <div className='trackSelection' id="trackSelection"></div> {/* track selection*/}
                    <input type="range" id="c1" className='slider sliderGauche bullet' 
                    onChange={this.changeMini}>
                    </input>
                    <input type="range" id="c2" className='slider sliderDroit bullet'
                    onChange={this.changeMaxi} >   
                    </input>
                </div>

                <div className='sliderLabel sliderDouble'>{this.state.valeurMini}</div>
                <div className='sliderLabel sliderDouble'>{this.state.valeurMaxi}</div>
            </div>
        )
    }
}
export default SliderDouble