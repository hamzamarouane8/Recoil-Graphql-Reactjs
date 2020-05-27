import React from 'react';
import Canvas from './Canvas';
import map from 'lodash';

import { useRecoilState } from 'recoil';
import { resizeItemWithId } from '../recoil/RecoilModule';

import ColorBlock from '../color/ColorBlock';
import { backgroundColor } from '../recoil/RecoilModule';

export default () => {

    const [color, setColor] = useRecoilState(backgroundColor('#000'));

    const listShapes = [{
        name: "First Rectangle"
    },
    { name: "Second Rectangle" }
    ];

    const list = [
        {
            float: "right"
        },
        {
            float: "left"
        }
    ]
    return (<>
        <div style={{ width: "80%", height: "100vh", float: "right", background: color }}>
            <h1> page Convas</h1>
            <div className="container" style={{ width: "100vh" }}>
                {
                    (list || []).map((item, index) => (
                        <div key={index} className="col-6" >
                            <Canvas key={index} id={index} />
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="sidebar" style={{ marginTop: "2%" }}>
            {
                (listShapes || []).map((item, index) => {
                    const [data, setData] = useRecoilState(resizeItemWithId(index));
                    return (
                        <div key={index}>
                            <div style={{ fontWeight: 700 }}> {item.name} : </div> width:{data.width} , height:{data.height}
                        </div>
                    )
                })
            }
            <ColorBlock />
        </div>

    </>)
}