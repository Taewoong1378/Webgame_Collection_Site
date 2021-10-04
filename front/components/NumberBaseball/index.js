import React, { useState, useRef, useMemo, useCallback } from 'react';
import Try from './Try';
import { Table, Input, Form } from 'antd';
import { Div, ButtonWrapper } from './styles';

// this를 사용하지 않은 함수이기 때문에 바깥으로 빼줬다
const getNumbers = () => {
    // 숫자 4개를 랜덤하게 뽑는 함수 (겹치지 않게)
    console.log('getNumbers');
    let output = [];
    for(let i=0; i<4; i++){
        output.push(Math.ceil(Math.random() * 9));
        for(let j=0;j<i;j++){
            if(output[i]===output[j]){
                output.splice(j,1);
                i--;
            };
        };
    };
    return output;
};


const NumberBaseball = () => {
  
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [tries, setTries] = useState([]);
  // const [answer, setAnswer] = useState(getNumbers());
  const answerNumbers = useMemo(()=> getNumbers(), []);
  const [answer, setAnswer] = useState(answerNumbers);
  const [time, setTime] = useState(1);
  const inputRef  = useRef();
  const startTime = useRef();

  const startTimer = useCallback(() => {
    if(tries.length === 0) {
      startTime.current = setInterval(() => {
        setTime(time + 1);
        console.log(`${time}초 경과`);
      }, 1000);
    }
    if(value === answer.join('')) {
      clearInterval(startTime.current);
      setTime(0);
    }
  });

  const onSubmitForm = useCallback(() => {
    if(value === answer.join('')){
      alert('정답을 맞췄습니다. 홈런!');
      setResult('홈런!');
      setTries((prevTries)=> (
          [...prevTries, { try: value, result: '홈런!' }]
      ));
      alert('게임을 다시 시작합니다!');
      setValue('');
      setResult('');
      setAnswer(getNumbers());
      setTries([]);
    } else {    // 답 틀렸으면 
        const answerArray = value.split('').map((v)=> parseInt(v));
        let strike = 0;
        let ball = 0;
        if (tries.length >= 9) {
          setResult(`10번 넘게 실패! 답은 ${answer.join(',')}였습니다`);
          alert('게임을 다시 시작합니다');
          setValue('');
          setAnswer(getNumbers());
          setTries([]);
          inputRef.current.focus();
        } else {
          console.log('답은', answer.join(''));
          for(let i=0; i<4; i++){
            if (answerArray[i] === answer[i]) {
              // console.log('strike', answerArray[i], answer[i]);
              strike++;
            } else if (answer.includes(answerArray[i])){
              // console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
              ball++;
            }
          }
          setTries((prevTries) => (
            [...prevTries, { try: value, result: `${strike} 스트라이크 ${ball} 볼입니다.`}]
          ));
          setValue('');
          inputRef.current.focus();
        }
      }
  },[value, answer]);

  const onChangeInput = useCallback((e) => {
      setValue(e.target.value);
  },[]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  return (
    <>
    <Div>
        <h1>{result}</h1>
        <Form style={{ position: 'relative', marginTop: '-50px' }} onFinish={onSubmitForm}>
          <Input style={{ width: '120px' }} ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
          <div style={{ marginTop: '10px' }}>시도: {tries.length}</div>
          <ButtonWrapper onClick={startTimer} htmlType="submit" type="primary">
            입력!
          </ButtonWrapper>
        </Form>
        <ul style={{ fontSize: '14px' }}>
          {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/>
          ))}
        </ul>    
    </Div>  
    </>
    );
};

export default NumberBaseball;