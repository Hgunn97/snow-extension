
// Pop up or content script requesting the current status
interface SnowRequest {
  type: "REQ_SNOW_STATUS"
}

// Background script broadcasting the current status
interface SnowResponse {
  type: "SNOW_STATUS";
  snowing: boolean
}

// Popup requesting background script for status change
interface SnowToogle {
  type: "TOGGLE_SNOW"
  snowing: boolean
}

export type MessageType = SnowRequest | SnowResponse | SnowToogle