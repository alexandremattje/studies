import './App.css';
import { Button } from 'bold-ui';
import React, { useEffect, useState } from 'react';
import appAxios from './appAxios';

export const App = () => {

  const [text, setText] = useState('')
  useEffect(() => {
    requestRandomText()
  })

  const requestRandomText = async () => {
    const response = await appAxios.get('/text')
    console.log(response)
    const body = response.data
    setText(body) 
  }

  return (
    <div>
      <Button kind='primary'>Hello World: {text}</Button>
    </div>
  )

}

