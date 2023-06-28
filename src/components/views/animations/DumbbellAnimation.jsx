import { Player, LottiePlayer } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import Animation from "assets/lottiefiles/70663-icon-gym-for-sporttler.json";

const DumbbellAnimation = () => {



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

export default DumbbellAnimation;
