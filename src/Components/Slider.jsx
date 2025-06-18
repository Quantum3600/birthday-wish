import * as React from 'react';
import { Slider } from '@base-ui-components/react/slider';
import { RxScissors } from "react-icons/rx";
import './BackgroundGradientStyles.css'

export default function MySlider({ onSliderComplete }) {
    const [sliderValue, setSliderValue] = React.useState(2);
    const [isComplete, setIsComplete] = React.useState(false);

    const handleComplete = (value) => {
        setSliderValue(value);
        if (value === 100 && !isComplete) {
            setIsComplete(true);
            console.log("complete");
            if (onSliderComplete) {
                onSliderComplete();
            }
        }
    };

    return (
        <div className="w-full py-8">
            <Slider.Root
                defaultValue={2}
                value={sliderValue}
                onValueChange={handleComplete}
                max={100}
                className="relative flex items-center w-full">
                <Slider.Control className="relative w-full">
                    <Slider.Track className="relative w-full h-[2px] bg-dotted">
                        <Slider.Indicator className="absolute bg-white h-6 w-6 border-2 border-white" />
                        <Slider.Thumb className="absolute h-8 w-8 flex items-center justify-center bg-transparent">
                            <RxScissors className="h-7 w-7 text-black" />
                        </Slider.Thumb>
                    </Slider.Track>
                </Slider.Control>
            </Slider.Root>
        </div>
    );
}