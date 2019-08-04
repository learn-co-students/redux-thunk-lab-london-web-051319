import React from 'react'

const CatList = ({catPics}) => {
  return (
    <div>
      {catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt='cat'/>)}
    </div>
  )
}

export default CatList;