---
title: "[React] React-Calender 커스텀 정리"
excerpt: "React-Calender 라이브러리 커스텀해서 사용하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React Hooks", "useReducer", "성능 최적화"]
last_modified_at: 2024-06-26T08:06:00-05:00
---

![image](/assets/image/posts/react-calender.png)

## 📄 React-Calendar란?

React 애플리케이션에서 사용 가능한 캘린더 컴포넌트 라이브러리입니다. <br />
사용량도 많고 꾸준히 업데이트되는 라이브러리라 주로 사용합니다.

[npm - React-Calender](https://www.npmjs.com/package/react-calendar)

<br />

## 📄 React-Calendar 사용하기

### 1. 설치하기

```ts
npm install react-calendar
```

### 2. 사용하기

```ts
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyApp = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>선택된 날짜: {date.toDateString()}</p>
    </div>
  );
};

export default MyApp;
```

<br />

## 📄 React-Calendar 커스텀화하기

### 🍄 시작 날짜, 마지막 날짜 정하기

```ts
 const minDate = new Date('2024-06-01')
 
 <Calendar     
    className="mx-auto"
    calendarType="gregory"
    onChange={onChange}
    value={date}
    minDate={minDate}
    maxDate={new Date()} // 오늘 날짜
  />
```

### 🍄 연,월, 일 형식 변경하기

```ts
  <Calendar     
    className="mx-auto"
    calendarType="gregory"
    onChange={onChange}
    value={date}
    formatMonthYear={(locale, date) => formatDate(date, 'yyyy.MM')} // ex. 2024.06
    formatDay={(locale, date) => moment(date).format('D')}
  />
  ```

### 🍄 날짜 이동 화살표 커스텀
* 이전달, 다음달에 활성화 날짜가 포함되지 않은경우 비활성화 처리

```ts
 const minDate = new Date('2024-06-01')
 const maxDate = new Date();

const isPrevDisabled = moment(currentDate).isSameOrBefore(minDate, 'month');
const isNextDisabled = moment(currentDate).isSameOrAfter(maxDate, 'month');
 
<Calendar     
  className="mx-auto"
  calendarType="gregory"
  onChange={onChange}
  value={date}
  nextLabel={<img src={require('images/button_arrow_right.svg').default} alt="캘린더 다음 달 선택"
                  className={cls(isNextDisabled ? 'opacity-50 cursor-not-allowed' : '')}
             />}
  prevLabel={<img src={require('images/button_arrow_right.svg').default} alt="캘린더 이전 달 선택"
                  className={cls('rotate-180', isPrevDisabled ? 'opacity-50 cursor-not-allowed' : '')}
             />}
/>
```

### 🍄 날짜 타일 커스텀

```ts
const getMonthDate = (dateString: Date) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}-${day}`
  };
  
const customTile = ({ date, view }: { date: Date; view: string }) => {
  if (view === 'month') {
    const today = new Date();
    if (isSameDay(date, today)) {
      return (
        <p
          className={cls('absolute right-[0px] bottom-[2px] w-full mb-0 ',
                           getMonthDate(currentDate) === getMonthDate(today) ? 'text-white' : 'text-purple-500',
                     )}>
                       오늘
         </p>
       );
     }
     
     if (recordedMonth?.includes(moment(date).format('YYYY-MM-DD'))) {
       return <p className="w-[5px] h-[5px] bg-[#C454AD] mb-0 rounded-[100%] mx-auto"></p>;
     }
   }
   return null;
};
 
<Calendar     
  className="mx-auto"
  calendarType="gregory"
  onChange={onChange}
  value={date}
  tileContent={customTile}
/>
```