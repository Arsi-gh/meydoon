import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { TbMeat } from 'react-icons/tb'
import { useRefs } from '@/context/refProvider'

export default function Grill() {

  const { grillRef } = useRefs()

  return (
    <>
    <Title ref={grillRef} text="بشقاب های اصلی"> <TbMeat className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 11).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}