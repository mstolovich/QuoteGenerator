import React, {useEffect} from "react"
import  useIncrementingNumber  from "../custom-hooks/use-incrementing-number.hook";

const rainbowColors = [
    'hsl(1deg, 100%, 55%)', // red
    'hsl(25deg, 100%, 50%)', // orange
    'hsl(40deg, 100%, 50%)', // yellow
    'hsl(130deg, 100%, 40%)', // green
    'hsl(230deg, 100%, 45%)', // blue
    'hsl(240deg, 100%, 45%)', // indigo
    'hsl(260deg, 100%, 55%)', // violet
  ];

  const paletteSize = rainbowColors.length;

  const useRainbow = ({intervalDelay = 2000 }) => {
    useEffect(() => {
        for (let i=0; i<3; i++) {
            try{
                CSS.registerProperty({
                    name: `--rqinbow-color-${i}`,
                    initialValue: rainbowColors[i],
                    syntax: 'color',
                    inherits: false,
                })
            }catch(err) {
                console.log(err);
            }
        }
    }, []);

    const intervalCount = useIncrementingNumber(intervalDelay);

    return {
        '--rainbow-color-0': rainbowColors[(intervalCount+1) % paletteSize],
        '--rainbow-color-1': rainbowColors[(intervalCount+2) % paletteSize],
        '--rainbow-color-2': rainbowColors[(intervalCount+3) % paletteSize]
    }

  }
export default useRainbow;

  