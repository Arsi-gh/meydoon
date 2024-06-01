import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuSoup } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function Appetizer() {

  const { appetizerRef } = useRefs()

  return (
    <>
    <Title ref={appetizerRef} text="پیش غذا"> <LuSoup className="title-icon -bottom-2"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 9).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}