import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
           <b>지하철</b>
            <br />
            <b>9호선 봉은사역</b> 4번 출구 도보 약 4분
            <br />
            <b>2호선 삼성역</b> 7번 출구 도보 약 15분
            <br />
            → 강남 01, 3417번 버스 환승 노블발렌티 정류장 하차
            <br />
            <br />
            <b>셔틀버스</b>
            <br />
            봉은사역 5번 출구 우측 50~60m (5분 간격)
            <br />
            <br />
            <b>버스</b>
            <br />
            9호선 봉은사역 3번 출구 삼성 1파출소
            <br />
            - 간선: 143, 146, 301, 343, 345, 401
            <br />
            - 지선: 2413, 2415, 3217, 3414, 4318
            <br />
            - 직행: 9407, 9507, 9607
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <b>경부고속도로</b>
            <br />
            반포IC 종합운동장 방향 직진 &gt; 교보생명 &gt; 차병원 &gt; 봉은사
            &gt; 아셈타워 직진 &gt; 노블발렌티 삼성점
            <br />
            <br />
            <b>서울 서부, 강북 지역</b>
            <br />
            영동대교 남단 교차로 무역센터 방향 &gt; 아크로 삼성 아파트 &gt;
            아셈타워 앞 봉은사 사거리 좌회전 &gt; 노블발렌티 삼성점
            <br />
            <br />
            <b>서울 동 남부 지역</b>
            <br />
            2호선 삼성역 무역센터 교차로 영동대교 방향 &gt; 아셈타워 앞 봉은사
            사거리에서 우회전 &gt; 노블발렌티 삼성점
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
