import React from 'react';
import PropTypes from 'prop-types';
import './RainbowButton.css';
import useRainbow from '..//../custom-hooks/use-rainbow.hook';

const RainbowButton = ({ children, intervalDelay = 1000 }) => {
  // The hook should take 1 argument, `intervalDelay`.
  // it should return an object in this shape:
  /*
    {
      '--magic-rainbow-color-0': hsl(...),
      '--magic-rainbow-color-1': hsl(...),
      '--magic-rainbow-color-2': hsl(...),
    }
  */


 
  const colors = useRainbow({ intervalDelay });
  console.log(colors)
  const colorKeys = Object.keys(colors);
  return (
    <button
      style={{
        // Spread the colors to define them as custom properties
        // on this element
        ...colors,
        // Use the keys to set the same transition on all props.
        transition: `
          ${colorKeys[0]} 500ms linear,
          ${colorKeys[1]} 500ms linear,
          ${colorKeys[2]} 500ms linear
        `,
        // Use those property values in our gradient.
        // Values go from 2 to 0 so that colors radiate
        // outwards from the top-left circle, not inwards.
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      
    </button>
  );
}


RainbowButton.propTypes = {};

RainbowButton.defaultProps = {};

export default RainbowButton;
