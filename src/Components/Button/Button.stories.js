import React from "react";
import Button from "./Button";
import Center from '../Center/Center';
export default {
  title: 'Form/Button',
  component: Button,
  args:{
      children: 'Button'      //if children is npt defined then it takes default name
  },
  decorators:[story => <Center>{story()}</Center>]
};

export const Primary = () => <Button variant='primary'>Primary</Button>

export const Secondary = () =><Button variant='secondary'>Secondary</Button>

export const Success = () => <Button variant='success'>Success</Button>

export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = (args) => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant:'primary',
    // children: 'Primary Args'    
    //if children is not defined then it takes default name
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant:'secondary',
    children: 'Secondary Args'
}

export const ExtendedA = Template.bind({})
ExtendedA.args = {
  ...PrimaryA.args,
  children:'Extended Primary Args'    //name for the children
}

