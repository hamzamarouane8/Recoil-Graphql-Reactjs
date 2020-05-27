import React from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable'
import {useRecoilState} from 'recoil';
import {resizeItemWithId} from '../recoil/RecoilModule';

export default({id})=>{

    const [data,setData] = React.useState({});
    const handleResize = (style, isShiftKey, type)=> {
      let { top, left, width, height } = style
      top = Math.round(top)
      left = Math.round(left)
      width = Math.round(width)
      height = Math.round(height)
      setData({
        top,
        left,
        width,
        height
      });
    }
  
    const handleRotate = (rotateAngle) => {
        setData({...data, rotateAngle})
    }
  
    const handleDrag = (deltaX, deltaY) => {
        setData({...data,
        left: data.left + deltaX,
        top: data.top + deltaY
      })
    }
    const {width, top, left, height, rotateAngle} = data;

      return (
          <ResizableRect
            left={left}
            top={top}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
            zoomable='n, w, s, e, nw, ne, se, sw'
            onRotate={handleRotate}
            onResize={handleResize}
            onDrag={handleDrag}
          />
                 )
    
}