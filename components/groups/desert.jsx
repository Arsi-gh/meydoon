import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuCakeSlice } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function Desert() {

  const { desertRef } = useRefs()

  return (
    <>
    <Title ref={desertRef} text="دســـر"> <LuCakeSlice className="title-icon -bottom-1 -left-4"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 13).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}