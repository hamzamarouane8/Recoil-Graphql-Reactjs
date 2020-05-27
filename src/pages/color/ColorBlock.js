import React from 'react';
import { SketchPicker } from 'react-color'
import './colorBlock.scss';
import { backgroundColor, authenticationUser } from '../recoil/RecoilModule';
import { useRecoilState } from 'recoil';

export default () => {
    const [active, setActive] = React.useState(false);

    const [color, setColor] = useRecoilState(backgroundColor("#000"));
    const handleChangeColor = (color) => setColor(color.hex);
    const handleColorPicker = () => {
        setActive(!active);
    }
    /* [{value:"tesy"},{value:"test"}].forEach(value => {
         React.useEffect(() => console.log(value));
       });*/
    return (
        <div className="color-section">
            <div>
                Choose color: <span className="color-picker-trigger" style={{ background: color }} onClick={handleColorPicker} />
            </div>
            <div className="color-picker">
                {active && <SketchPicker
                    color={color}
                    onChange={handleChangeColor}
                />}
            </div>
        </div>
    )
}