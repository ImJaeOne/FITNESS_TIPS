const content = document.getElementById("content");

function MainHTML(){
    content.innerHTML = `<div id ="main_content">
    <div id="plan">
        <div class="header">▶오늘의 목표</div>                       
            <div class="list">
                <div>
                    <input type="checkbox" id="exercise_back">
                    <label for="exercise_back">등<em>▼</em></label>
                    <div>
                        <p>풀업 12reps 4set</p>
                        <p>데드리프트 12reps 4set</p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="exercise_chest">
                    <label for="exercise_chest">가슴<em>▼</em></label>
                    <div>
                        <p>예정되어 있지 않습니다.</p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="exercise_leg">
                    <label for="exercise_leg">하체<em>▼</em></label>
                    <div>
                        <p>예정되어 있지 않습니다.</p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="exercise_shoulder">
                    <label for="exercise_shoulder">어깨<em>▼</em></label>
                    <div>
                        <p>사이드 레터럴 레이즈 12reps 4set</p>
                        <p>밀리터리 프레스 12reps 4set</p>
                    </div>
                </div>
            </div>                   
    </div>
    <div id="achievement">
        <div class="header">▶운동 달성률</div>
        <div><img src="달성률.jpg" style="width:100%"></div>
    </div>
</div>`;
}
function WriteHTML(){
    content.innerHTML=`<div class="header">
    글쓰기
</div>
<label for="subject" class="field">제목</label>
<input type="text" id="subject" required>
<div id="editor"></div>
<div id="write_end">
    <button type="submit" class="complete">작성 완료</button>
    <button type="submit" class="cancel">작성 취소</button>
</div>`
}
function WriteListHTML(){
    content.innerHTML = `<nav class="message_board_top">
    <div>
        <span class="title">자유 게시판</span>
        <span class="write">글쓰기</span>
        <hr>
    </div>
</nav>
<div class="message_board_content">
    <ul>
        <li>
            사레레 팁
            <hr>
        </li>
        <li>
            스쿼트 팁
            <hr>
        </li>
        <li>
            프로틴 팁
            <hr>
        </li>
        <li>
            운동 뉴비들을 위한 루틴
            <hr>
        </li>
        <li>
            살 좀 찌우고 싶어요 도움 좀 ㅠㅠ
            <hr>
        </li>
    </ul>
</div>
<div class="page">
    <ol>
        <li> ←</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>→</li>
    </ol>
</div>`
}
function exerciseHTML(){
    content.innerHTML = `<div class="exercise_name">
    업라이트 로우
    <input type="button"><label onclick = "exerciseListHTML()">내 운동 목록 추가</label>
</div>
<div><img src="upright-row.jpg" style="width: 900px; height: 600px;"></div>
<div class="exercise_explain">
    <p>Target muscle: Lateral Deltoid</p>
    <p>Synergists: Anterior Deltoid, Supraspinatus, Brachialis, Brachioradialis, Biceps</p> <p>Brachii, Middle and Lower Trapezius, Serratus Anterior, Infraspinatus, Teres Minor
    Mechanics: Compound</p>
    <p>Force: Pull</p>
</div>`
}
function exerciseListHTML(){
    content.innerHTML = `<div class="header">
    내 운동 목록
</div>
<div id="achievement">
    <div id="list">
        <input type="checkbox" id="exercise_list" style="margin: 0 auto;"><label for="exercise_list">어깨<em>▼</em></label>
        <div>
            <div class="list_">
                <input type="checkbox" id="exercise_list_"><label for="exercise_list_">업라이트 로우</label>
                <span style="text-align:end;">4세트 12회</span>
            </div>
        </div>
    </div>
    <div id="bucket">
        <div class="bucket_header">
            오늘의 운동 목록
        </div>
        <div>
            업라이트 로우
        </div>
    </div>
</div>
<div id="finish">
    <button class="fin" onclick = "AchievementHTML()">오늘의 목표에 추가</button>
</div>`
}
function AchievementHTML(){
    content.innerHTML = `<div class="header">
    오늘의 목표
</div>
<div id="achievement">
    <div id="list">
        <input type="checkbox" id="exercise_list" style="margin: 0 auto;"><label for="exercise_list">어깨<em>▼</em></label>
        <div>
            <div class="list_">
                <input type="checkbox" id="exercise_list_"><label for="exercise_list_">업라이트 로우</label>
                <span style="text-align:end;">4세트 12회</span>
            </div>
        </div>
    </div>
</div>
<div id="finish">
    <button class="fin">오운완</button>
</div>`
}