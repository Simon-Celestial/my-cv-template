import React, {useCallback, useEffect, useState} from 'react'
import backgroundMusic from "/Assets/Sounds/backgroundMusic.mp3";
import styles from "./MusicButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeHigh, faVolumeXmark} from "@fortawesome/free-solid-svg-icons";

const backgroundAudio = new Audio(backgroundMusic);

const playBackgroundAudio = () => {
    backgroundAudio.play().catch(error => {
        console.error('Error playing background audio:', error);
    });
};
const pauseBackgroundAudio = () => {
    backgroundAudio.pause();
};
export const MusicButton = () => {
    const [musicActive, setMusicActive] = useState(false);

    const musicHandler = useCallback(
        () => {
            setMusicActive(prev => !prev);
        },
        [musicActive],
    );

    useEffect(() => {
        musicActive ? playBackgroundAudio() : pauseBackgroundAudio();

    }, [musicActive]);

    return (
        <div className={styles.musicButton}
        onClick={musicHandler}>
            {
                musicActive ?
                    <FontAwesomeIcon icon={faVolumeHigh}/>
                    :
                    <FontAwesomeIcon icon={faVolumeXmark}/>
            }
        </div>
    )
}
