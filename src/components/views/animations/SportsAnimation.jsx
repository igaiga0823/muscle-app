import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import Animation from "assets/lottiefiles/145002-for-you.json";

const SportsAnimation = () => {
    return (
        <Player
            src={Animation}
            background="transparent"
            speed={1}

            loop
            controls
            autoplay
        />
    );
};

export default SportsAnimation;
