import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuCakeSlice } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function Pasta() {

  const { pastaRef } = useRefs()

  return (
    <>
    <Title ref={pastaRef} text="پـاســتا"> </Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 14).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}