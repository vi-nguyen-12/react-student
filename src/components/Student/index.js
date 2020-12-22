import React, {useState} from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'
import {Wrapper} from './styled';
import Tag from '../Tag';
import {Container, Image, Header,List,Button} from 'semantic-ui-react';

const Student = ({student}) => {
    const grades=student.grades.map(i=>parseInt(i));
    const average=grades.reduce((sum,i)=>sum+=i,0)/grades.length;
    const [isShow,setShow]=useState(false);
    const handleClick=()=>{
        setShow(!isShow);
    }

    return (
        <Wrapper>       
            <Container className='avatar'>
                <Image src={`${student.pic}`} alt='pic'/>
            </Container>
            <Container className='info'>
                <Header>{student.firstName} {student.lastName}</Header>
                <List>
                    <List.Item>Email: {student.email}</List.Item>
                    <List.Item>Company: {student.company}</List.Item>
                    <List.Item>Skill: {student.skill}</List.Item>
                    <List.Item>Average: {average}%</List.Item>
                </List>
                {isShow&&(
                    <Container className='grades'>
                        <List>
                            {grades.map((grade,index)=>(
                                <List.Item> Test {index}: {grade}%</List.Item>
                            ))}
                        </List>
                    </Container>
                )
                }
                <Tag id={student.id} tags={student.tags}/>     
            </Container>
            <Button className="toggle" onClick={handleClick}>
                {isShow?<FaMinus/>:<FaPlus/>}
            </Button>    
        </Wrapper>
    )
}

export default Student
