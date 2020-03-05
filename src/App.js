import React from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';

@inject('homeworkStore')
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let array = new Array(50).fill({ "seq": 1 })
    let count = 0;

    console.log("###### render #######")

    const { sido, sigungu, bjdong, platGb } = this.props.homeworkStore
    console.log("#### sido after render => ", JSON.stringify(sido))

    const { setSido, setSigungu, setBjdong, setPlatGb } = this.props.homeworkStore;
    const { rowData, loginId, loginPw, searching, loginSession, dataCount } = this.props.homeworkStore
    console.log("#### loginId after render => ", JSON.stringify(loginId))
    console.log("#### rowData after render => ", JSON.stringify(rowData))
    console.log("###### dataCount after render =>", dataCount);


    // let keys = rowData.length > 0 ? Object.keys(rowData[0]) : [];
    // console.log("## keys => ", keys)

    const headerStyle = {
      "white-space": "nowrap"
    };

    const tdStyle = {
      "white-space": "nowrap"
    }

    const loginStyle = {
      "margin-left": "20px",
      "width": "100px"
    }

    const sessionStyle = {
      "margin-left": "20px",
      "width": "400px"
    }

    return (

      <div>
        <h2 style={{ color: "#228B22" }}>&nbsp;&nbsp; 건축물대장 - 기본개요 ( 건축물대장 데이터 적재 및 조회용 API ) &nbsp; <span style={{ color: "#FF0000" }}> ※ 로그인 필수</span></h2>
        {loginSession != true ?
          <div>
            <div> <input style={loginStyle} placeholder="ID 를 입력하세요..." onChange={this.props.homeworkStore.setLoginId} value={loginId}></input>
              <button onClick={this.props.homeworkStore.apiUserLogin}>로그인</button>
            </div >
            <div><input style={loginStyle} type='password' placeholder="PW 를 입력하세요..." onChange={this.props.homeworkStore.setLoginPw} value={loginPw}></input>
              <button onClick={this.props.homeworkStore.apiUserRegister}>회원가입</button>
            </div>
          </div>
          :
          <div style={sessionStyle}>
            <h4><span style={{ color: "#0000CD" }}>{loginId}</span> 님 반갑습니다. &nbsp;<span style={{ color: "#FF0000" }}>※ 시도, 시군구, 법정동 선택필수</span></h4>
            <button onClick={() => this.props.homeworkStore.logOut()}>로그아웃</button>
          </div >
        }
        <br></br>
        <div>
          <td >&nbsp;&nbsp;&nbsp;<select id="sido" value={sido} onChange={(e, data) => setSido(e, data)}>
            <option value="default">시도</option>
            <option value="seoul">서울특별시</option>
          </select>&nbsp;&nbsp;</td>
          <td><select id="sigungu" value={sigungu} onChange={(e, data) => setSigungu(e, data)}>
            <option value="default">시군구</option>
            <option value="11560">영등포구</option>
          </select>&nbsp;&nbsp;</td>
          <td><select id="bjdong" value={bjdong} onChange={(e, data) => setBjdong(e, data)}>
            <option value="default">법정동</option>
            <option value="11800">도림동</option>
          </select>&nbsp;&nbsp;</td>
          <td><select id="platGb" value={platGb} onChange={(e, data) => setPlatGb(e, data)}>
            <option value="default">대지구분</option>
            <option value="0">대지</option>
            <option value="1">산</option>
            <option value="2">블록</option>
          </select>
          </td>
          <td>
            &nbsp;
            &nbsp;
              <button onClick={this.props.homeworkStore.apiCallForData}>검색하기</button>
            &nbsp;
              <button onClick={this.props.homeworkStore.clearRowData}>초기화</button>
            &nbsp;
            &nbsp;
            {loginSession == true ? (dataCount != "" ? <span>총 데이터 : {dataCount} 건</span> : <span>총 데이터 : 0 건</span>) : null}
          </td>
        </div>
        <h2 align="center">{searching}</h2>
        <br></br>

        <div style={{ width: '99%', height: '200px' }} overflow="auto">

          <table border="1" cellSpacing="1" margin-left="auto" >
            {/* 31개 컬럼  */}
            <th style={headerStyle} align="center" bgcolor="#87CEFA">순번</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대지위치</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">시군구코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">법정동코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대지구분코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">번</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">지</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">관리건축물대장PK</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">관리상위건축물대장PK</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대장구분코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대장구분코드명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대장종류코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">대장종류코드명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">도로명대지위치</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">건물명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">특수지명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">블록</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">로트</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">외필지수</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">새주소도로코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">새주소법정동코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">새주소지상지하코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">새주소본번</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">새주소부번</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">지역코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">지구코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">구역코드</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">지역코드명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">지구코드명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">구역코드명</th>

            <th style={headerStyle} align="center" bgcolor="#87CEFA">생성일자</th>

            {rowData.length > 0 ? rowData.map(e => {
              count++;
              return (
                <tbody>
                  <tr>
                    <td align="center">{count}</td>
                    <td style={tdStyle}>{e.platPlc != undefined ? e.platPlc : null}</td>
                    <td style={tdStyle}>{e.sigunguCd != undefined ? e.sigunguCd : null}</td>
                    <td style={tdStyle}>{e.bjdongCd != undefined ? e.bjdongCd : null}</td>
                    <td style={tdStyle}>{e.platGbCd != undefined ? e.platGbCd : null}</td>
                    <td style={tdStyle}>{e.bun != undefined ? e.bun : null}</td>
                    <td style={tdStyle}>{e.ji != undefined ? e.ji : null}</td>
                    <td style={tdStyle}>{e.mgmBldrgstPk != undefined ? e.mgmBldrgstPk : null}</td>
                    <td style={tdStyle}>{e.mgmUpBldrgstPk != undefined ? e.mgmUpBldrgstPk : null}</td>
                    <td style={tdStyle}>{e.regstrGbCd != undefined ? e.regstrGbCd : null}</td>
                    <td style={tdStyle}>{e.regstrGbCdNm != undefined ? e.regstrGbCdNm : null}</td>
                    <td style={tdStyle}>{e.regstrKindCd != undefined ? e.regstrKindCd : null}</td>
                    <td style={tdStyle}>{e.regstrKindCdNm != undefined ? e.regstrKindCdNm : null}</td>
                    <td style={tdStyle}>{e.newPlatPlc != undefined ? e.newPlatPlc : null}</td>
                    <td style={tdStyle}>{e.bldNm != undefined ? e.bldNm : null}</td>
                    <td style={tdStyle}>{e.splotNm != undefined ? e.splotNm : null}</td>
                    <td style={tdStyle}>{e.block != undefined ? e.block : null}</td>
                    <td style={tdStyle}>{e.lot != undefined ? e.lot : null}</td>
                    <td style={tdStyle}>{e.bylotCnt != undefined ? e.bylotCnt : null}</td>
                    <td style={tdStyle}>{e.naRoadCd != undefined ? e.naRoadCd : null}</td>
                    <td style={tdStyle}>{e.naBjdongCd != undefined ? e.naBjdongCd : null}</td>
                    <td style={tdStyle}>{e.naUgrndCd != undefined ? e.naUgrndCd : null}</td>
                    <td style={tdStyle}>{e.naMainBun != undefined ? e.naMainBun : null}</td>
                    <td style={tdStyle}>{e.naSubBun != undefined ? e.naSubBun : null}</td>
                    <td style={tdStyle}>{e.jiyukCd != undefined ? e.jiyukCd : null}</td>
                    <td style={tdStyle}>{e.jiguCd != undefined ? e.jiguCd : null}</td>
                    <td style={tdStyle}>{e.guyukCd != undefined ? e.guyukCd : null}</td>
                    <td style={tdStyle}>{e.jiyukCdNm != undefined ? e.jiyukCdNm : null}</td>
                    <td style={tdStyle}>{e.jiguCdNm != undefined ? e.jiguCdNm : null}</td>
                    <td style={tdStyle}>{e.guyukCdNm != undefined ? e.guyukCdNm : null}</td>
                    <td style={tdStyle}>{e.crtnDay != undefined ? e.crtnDay : null}</td>
                  </tr>
                </tbody>)
            }) : null}
          </table>
        </div>
      </div >

    )
  }
}
