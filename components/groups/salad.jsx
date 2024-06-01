import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuSalad } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function Salad() {

  const { saladRef } = useRefs()

  return (
    <>
    <Title ref={saladRef} text="سالاد"> <LuSalad className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 10).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}