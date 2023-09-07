import axios from "axios";
import process from "../../app/config";
const widgetAPI = window.WS.widgetAPI();

export function getAgentConfiguration({ agentId }) {
  const config = {
    method: "get",
    url: `${process.env.AXP_PROXY_BASE_URL}/api/admin/v1beta/accounts/${process.env.AXP_ACCOUNT_ID}/users/${agentId}`,
  };
  return axios(config).then((response) => {
    return response.data;
  });
}

export function getCapabilities() {
  return widgetAPI.getCapabilities();
}

export function getAgentDetails() {
  return widgetAPI.getConfiguration()?.user;
}

export function getTeam() {
  return widgetAPI.getTeamData();
}

export function getInteractionDetails(interactionId) {
  const widgetAPI = window.WS.widgetAPI(interactionId);
  return widgetAPI.getInteractionData();
}

export function sendChatMessage(interactionId, message){
  const widgetAPI = window.WS.widgetAPI(interactionId);
  return widgetAPI.sendChatMessage(message);
}

export function subscribeToAgentState(callback) {
  widgetAPI.onDataEvent("onAgentStateEvent", callback);
}

export function subscribeToInteractionState(callback) {
  widgetAPI.onDataEvent("onAnyInteractionEvent", callback);
}
export function subscribeToMedia(callback) {
  widgetAPI.onDataEvent("onMediaEvent", callback);
}
