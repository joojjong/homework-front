import { observable, action, computed } from 'mobx';
import axios from 'axios';


class HomeworkStore {
  @observable
  sido = "default";

  @action
  setSido = (e, data) => {
    this.sido = e.target.value
  }

  @observable
  sigungu = "default";

  @action
  setSigungu = (e, data) => {
    this.sigungu = e.target.value
  }

  @observable
  bjdong = "default";

  @action
  setBjdong = (e, data) => {
    this.bjdong = e.target.value
  }

  @observable
  platGb = "default";

  @action
  setPlatGb = (e, data) => {
    this.platGb = e.target.value
  }

  @observable
  _rowData = new Array();

  @action
  setRowData = (data) => {
    this._rowData = data
  }

  @computed
  get rowData() {
    return this._rowData
  }

  @observable
  loginId = ""

  @action
  setLoginId = (e, data) => {
    console.log("## setLoginId in store")
    this.loginId = e.target.value
  }

  @observable
  loginPw = ""

  @action
  setLoginPw = (e, data) => {
    console.log("## setLoginPw in store", e.target.value)
    this.loginPw = e.target.value
  }

  @observable
  searching = ""

  @observable
  loginSession = false

  @observable
  dataCount = ""

  @action
  logOut = () => {
    console.log("## logOut in store")
    this.loginSession = false
    this.loginId = ""
    this.loginPw = ""
  }

  @action
  clearRowData = () => {
    console.log("## clearRowData in store")
    this._rowData = new Array();
    this.sido = "default"
    this.sigungu = "default"
    this.bjdong = "default"
    this.platGb = "default"
  }

  @action
  apiUserLogin = () => {
    console.log("#### apiUserLogin in store")
    let params = new Object()
    params["userId"] = this.loginId
    params["pw"] = this.loginPw

    return axios.post(`http://localhost:8080/user/login`, params).then(response => {
      if (response.data == "ok") {
        this.loginSession = true
      } else {
        alert("로그인 실패했습니다.")
      }
    })

  }

  @action
  apiUserRegister = () => {
    console.log("#### apiUserRegister in store")
    let params = new Object()
    params["userId"] = this.loginId
    params["pw"] = this.loginPw

    return axios.post(`http://localhost:8080/user/register`, params).then(response => {
      if (response.data == "ok") {
        this.loginSession = true
        alert("회원가입 되였습니다.")
      } else {
        alert("이미 동일한 ID가 존재합니다.")
      }
    })
  }

  @action
  apiCallForData = () => {
    console.log("#### apiUserRegister in store")

    if (this.loginSession != true) {
      alert("로그인 후 조회해주세요")
      return null;
    }

    if (this.sido == "default") {
      alert("시도 선택은 필수입니다.")
      return null;
    }

    if (this.sigungu == "default") {
      alert("시군구 선택은 필수입니다.")
      return null;
    }

    if (this.bjdong == "default") {
      alert("법정동 선택은 필수입니다.")
      return null;
    }


    let params = new Object()
    params["sido"] = this.sido
    params["sigunguCd"] = this.sigungu
    params["bjdongCd"] = this.bjdong
    params["platGbCd"] = this.platGb
    this.searching = "API 조회중입니다~~"

    return axios.post(`http://localhost:8080/openApi/find`, params).then(response => {

      this._rowData = response.data != null && response.data != undefined && response.data.length > 0 ? response.data : new Array()
      this.dataCount = response.data != null && response.data != undefined && response.data.length > 0 ? response.data.length : ""
      this.searching = ""

    })
  }


}
export default HomeworkStore;
