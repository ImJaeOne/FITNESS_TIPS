let title = document.getElementById("title");
let uprightrow = document.getElementsByClassName("uprightrow");

function setInnerHTML(){
    let content = document.getElementById("content");
    content.innerHTML += '<div>hi 하이</div>';
}
function setMainHTML(){
    let content = document.getElementById("content");
    content.innerHTML = '<div><div id="plan">
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
</div></div>';
}