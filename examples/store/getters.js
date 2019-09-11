const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  isShowReqErrorMsgBox: state => state.app.isShowReqErrorMsgBox,
  permission_routers: state => state.permission.routers
}
export default getters
