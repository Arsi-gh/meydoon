import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LiaCoffeeSolid } from 'react-icons/lia'
import { useRefs } from '@/context/refProvider'

export default function Tea() {

  const { teaRef } = useRefs()

  return (
    <>
    <Title ref={teaRef} text="چای ایرانی و سایر اقوام"> <LiaCoffeeSolid className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 3).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}