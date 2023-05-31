import React from "react";

function MMain() {
  // mChat 부분 테스트
  return (
    <>
      {/* 모바일 헤더 부분 */}
      <header>
        <button type="button">뒤로가기 버튼</button>
        <h1>
          <a href="#!">로고이미지</a>
        </h1>
      </header>
      {/* 모바일 채팅 부분 */}
      <main>
        <section>
          <article>
            <h2>Room Title</h2>
          </article>
          <article>
            <div>파트너 말풍선</div>
            <div>상대 말풍선</div>
          </article>
        </section>
      </main>
      <footer>
        <div>
          <input type="text" placeholder="다음으로 넘어가세요!" />
        </div>
        <div>
          <button type="button">마이크이미지 </button>
        </div>
      </footer>
    </>
  );
}

export default MMain;
