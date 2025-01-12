import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef,
    AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';

function displayMinutes(minutes){
    return minutes >= 10 ? minutes : "0" + minutes.toString();
}

const timeDisplayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

function EventMarker({position, timestamp, title, description}){
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
      );
    const handleClose = useCallback(() => setInfoWindowShown(false), []);
    return (
        <>
            <AdvancedMarker ref={markerRef} position={position} title = {title} anchorPoint={AdvancedMarkerAnchorPoint.BOTTOM_CENTER} onClick={handleMarkerClick}/>
            {infoWindowShown && (<InfoWindow className="max-w-52" anchor={marker} headerContent = {<h1 className='font-bold'>{title}</h1>} onClose={handleClose}>
                <div className='whitespace-pre-line'>{timestamp.toLocaleDateString(undefined, timeDisplayOptions) + "\n " + timestamp.getHours()+":"+displayMinutes(timestamp.getMinutes())}

                </div>
                <p className='text-xs'>{description}</p>
                <button className='p-2 bg-red-700 rounded-xl w-fit'>Sign Up</button>
                
            </InfoWindow>
            )}   
        </> 
    )
}

export default EventMarker