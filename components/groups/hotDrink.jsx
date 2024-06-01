import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { PiCoffeeBold } from 'react-icons/pi'
import { useRefs } from '@/context/refProvider'

export default function HotDrink() {

  const { hotDrinkRef } = useRefs()

  return (
    <>
    <Title ref={hotDrinkRef} text="نوشیدنی های گرم"> <PiCoffeeBold className="title-icon -left-5"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 1).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}