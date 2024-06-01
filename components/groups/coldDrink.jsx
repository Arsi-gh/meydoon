import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuCupSoda } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function ColdDrink() {

  const { coldDrinkRef } = useRefs()

  return (
    <>
    <Title ref={coldDrinkRef} text="نوشیدنی های سرد"> <LuCupSoda className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 4).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}