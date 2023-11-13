function MyButton() {
  return <button>I'm a button</button>;
}

export function App() {
  return (
    <>
      {/* 빈 태그로 감싸기 */}
      <div className="avatar">
        {/* 클래스 추가 */}
        <h1>Welcome to my app</h1>
      </div>
      <div className="avatar"></div>
      <div className="avatar"></div>
      <div className="avatar"></div>
      <div className="avatar"></div>
    </>
  );
}

export default App;
