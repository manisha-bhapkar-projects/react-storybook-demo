import React from 'react';
import Input from './Input';
import Center from '../Center/Center';
export default{
    title: 'Form/Input',
    component: Input
}

export const Small = () =>
<Center>                     
<Input size='small' placeholder='Small'/>
</Center>

//center is global css which we wan't to apply like wrapping it around the tag
//but instead of wrapping particular tag we can add decorators for this like added in button stories.
export const Medium = () =>
    <Input size='medium' placeholder='Medium'/>

export const Large = () =>
    <Input size='large' placeholder='Large'/>
