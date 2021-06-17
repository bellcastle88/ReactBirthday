import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return ( 
    <main>
      <section className="container">
        {/* length로 전체인원 표시하기 */}
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {/* 클릭시 setPeople함수 실행 (array 비우기) */}
        <button onClick={() => setPeople([])}>
          clear all</button>
      </section>
    </main>
  );
}

export default App;
