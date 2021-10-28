import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, Input, Label } from'reactstrap';

function TeaType() {
    return (
        <Card className='col-md-5 m-1'>
            <CardTitle><h2>Choose your tea base</h2></CardTitle>
            <Label htmlFor='milk tea'>
                <Input
                    type='button'
                    placeholder='milktea'>
                        milk tea
                </Input>
            </Label>
            <Input
                type='button'>
            </Input>

    
                  
        </Card>
    )
}

export default TeaType
