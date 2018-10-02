6개월전에 작성한 HTML5 postIt 입니다.

기능 구현이 똑바로 안됐습니다.

안됐던 이유

1. 모듈화가 정상적으로 되어있지 않았음 (Prototype 지식 부족)

2. 하드코딩 한 경우가 너무많았음

3. HTML 5 Drag and Drop 에 대한 지식 부족

4. Native 지식 부족 
    > 자사 프레임워크를 쓰니까 offset,client,page,screen 등에 대한 지식 부족
5. css  
    > inline-block 이랑 block 으로 전부 처리를 공부하면서 하였음
6. Bublling , Capturing 

피드백

현재 3시간 정도 제작 결과

1. 모든 컴포넌트에 대한 Prototype으로 모듈화 
  > 모듈화 적용시 생각보다 관리하기가 쉽게 됐음
  > 코드 또한 보기편함

2. 1을 통한 하드코딩 영역이 많이 제거됨

3. drag and dorp 을 HTML5을 통하여 구현하였으며 setDragImage에 더미 를 넣어서 
    화면에 나오지 않게 하였고 이동할때의 객체 위치는
    마우스의 위치를 고려하여서 조정
    clientX pageX offsetX 를 적절히 사용
4. 1,3 을 통해 어느정도 지식 확보

5. flex 모델 로 전부 재구현 

6. 개념부족으로 drag 이벤트를 막기 위해서는 해당 막을 자식 위젯에도
   같은 drag를 넣어놓고  해당 자식에서 event.stopPropagation 을 통하여서 드래그가 안되게 하여야 함
   
   만약에 반대의 경우라면
   
   addEventListener 의 마지막 파라미터로 true값을 줘서 Bubbling이 아닌 Capturing으로 동작하게 한후에
   
   event 함수를 통하여서 막아야함
   
to do 

    1. 충돌 처리
    2. 폰트 변경
    3. 메모 캡처 후 저장
    4. 완전 모듈화
    5. drag를 클릭 형태로 사용시 처음 event에서 좌표 위치를 -x -y 로 잘못 받아오는 경우가있음 이에 대한 보정 처리
    6. 캐싱처리
       

작성 완료 후 postItCurrent 로 재 등록 예정 

