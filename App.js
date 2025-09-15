import React,{useState}from 'react';
import'./App.css';
function Bmi_Calculator() {
    const [height_value,setHeightValue]=useState('');
    const [weight_value,setWeightValue]=useState('');
    const [bmiValue,setBmiValue]=useState('');
    const [bmiMessage,setBmiMessage]=useState('');
    const [error,setError]=useState('');

    const calculateBmi=()=>{
        const height_inMeters=height_value/100;
        if (isNaN(height_inMeters) || isNaN(weight_value)) {
            setError('Enter valid numeric values for height and weight');
            setBmiValue('');
            setBmiMessage('');
            return;
        }
        if((height_inMeters<0)||(weight_value<0)) {
            setError('Enter valid positive values for height and weight');
            setBmiValue('');
            setBmiMessage('');
            return;
        }
        const bmi=(weight_value/(height_inMeters * height_inMeters)).toFixed(2);
        setBmiValue(bmi);
        let message = '';
        if(bmi<18.5){
            message='UNDERWEIGHT';
        } 
        else if(bmi>=18.5 && bmi<25){
            message='NORMAL WEIGHT';
        } 
        else if(bmi>=25 && bmi<30){
            message='OVERWEIGHT';
        } 
        else{
            message='OBESE';
        }
        setBmiMessage(message);
        setError('');
    };
    return(
        <div className="container">
            <h1><u>BMI CALCULATOR</u></h1>
            <div className="input-container">
                <label htmlFor="height">Enter your Height(cm):</label>
                <input
                    type="text" 
                    id="height"
                    value={height_value}
                    onChange={(e)=>setHeightValue(e.target.value)}
                />
            </div>
            <div className="input_container">
                <label htmlFor="weight">Enter your Weight(kg):</label>
                <input
                    type="text" 
                    id="weight"
                    value={weight_value}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <button className="button" onClick={calculateBmi}>
                Calculate BMI
            </button>
            {error && <p className="error">{error}</p>}
            {bmiValue && bmiMessage && (
                <div className="result">
                    Your BMI is:
                    <p>
                        <span className="bmi-value">{bmiValue}</span>
                    </p>
                    Your Result is:
                    <p>
                         <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
export default Bmi_Calculator;
