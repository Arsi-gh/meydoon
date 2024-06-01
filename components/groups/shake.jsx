import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { TbMilkshake } from 'react-icons/tb'
import { useRefs } from '@/context/refProvider'

export default function Shake() {

  const { shakeRef } = useRefs()

  return (
    <>
    <Title ref={shakeRef} text="میلک شیک"> <TbMilkshake className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 5).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}