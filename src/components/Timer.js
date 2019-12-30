import React from 'react';



class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            seconds:0,
            minutes:0,
            hours:0,
            isRunning:false
        }

    }
    
    a = 0;

     setMinutes = ()=>{
    
        if( this.state.seconds === 60){
            this.setState({
                seconds :0,
                minutes: this.state.minutes + 1,
            })
            
         }
     }

      setHours = ()=>{
         if (this.state.minutes === 60){
             this.setState({
                 minutes:0,
                 hours:this.state.hours + 1,
             })
         }
     }


    start =()=>  {
        if(this.state.isRunning){

            this.setState({
               
                seconds: this.state.seconds,
                minutes: this.state.minutes,
                hours: this.state.hours,

                isRunning:false
               
              })

            clearInterval(this.a)
             
        }
        
        
        else {

           this.a = setInterval(
                () => {
                   
                  this.setState({
                    seconds: this.state.seconds + 1,
                    isRunning:true
                   
                  })
                  this.setMinutes();
                  this.setHours();
                },
                1000
              );
            }
         }
    
      reset=()=>{
        clearInterval(this.a)
        this.setState({
            seconds:0,
            minutes:0,
            hours:0,
            isRunning:false
        })    
      }

    render() {
        
        return (
            <div>
        


          <h1>  {this.state.hours.toString().padStart(2, '0')}  {':'}  
          {this.state.minutes.toString().padStart(2, '0')}  {':'}  
          {this.state.seconds.toString().padStart(2, '0')}</h1>



             <div id ="buttons">
            <button className ='button1' onClick={this.start}> Start</button>  
            <button className='button1' onClick={this.reset}> Reset</button> 
            </div> 
            </div>
        )
    }
}


export default Timer;