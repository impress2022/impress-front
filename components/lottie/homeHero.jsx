import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './Impress_kv.json';

import classNames from 'classnames';
import useWindowSize from "../../hooks/useWindowSize";

export default function HomeHero (props) {
    const window = useWindowSize()

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    let lottieClasses = classNames({
      'w-l-320 h-l-320 md:w-l-511 md:h-l-511 lg:w-l-805 lg:h-l-805': true,
    })

    lottieClasses += ' ' + props.custom

    return <div className={lottieClasses}>
      <Lottie options={defaultOptions}
              height="100%"
              width="100%"
              />
    </div>
}