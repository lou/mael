import React, { useState, useEffect } from "react"
import loadScript from "../utils/loadScript"
import { formatCategories } from "./Categories"

const initClient = () => {
  window.gapi.client
    .init({
      clientId:
        "15130610788-g4uhh98hk9rmdkkfos1kf945bsb5o0b7.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/spreadsheets",
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(() => {
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus)
      updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
    })
}

const updateSignInStatus = isSignedIn => {
  if (isSignedIn) {
    doesSpreadsheetExists()
  }
}

const handleSignInClick = () => {
  if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
    exportEvents()
  } else {
    window.gapi.auth2.getAuthInstance().signIn()
  }
}

const handleSignOutClick = event => {
  window.gapi.auth2.getAuthInstance().signOut()
}

const insertEvents = () => {
  const events = JSON.parse(localStorage.getItem("events"))
  let spreadsheetBody = {}

  if (events) {
    const eventsRows = events.map(event => ({
      values: [
        {
          userEnteredValue: {
            stringValue: new Date(event.date).toLocaleString()
          }
        },
        {
          userEnteredValue: {
            stringValue: formatCategories(event)
          }
        },
        {
          userEnteredValue: {
            numberValue: event.duration
          }
        }
      ]
    }))

    spreadsheetBody = {
      properties: {
        title: "Maël"
      },
      sheets: [
        {
          data: [
            {
              rowData: [
                {
                  values: [
                    {
                      userEnteredValue: {
                        stringValue: "DATE"
                      }
                    },
                    {
                      userEnteredValue: {
                        stringValue: "ÉVÉNEMENTS"
                      }
                    },
                    {
                      userEnteredValue: {
                        stringValue: "DURÉE"
                      }
                    }
                  ]
                },
                ...eventsRows
              ]
            }
          ]
        }
      ]
    }
  }
  return spreadsheetBody
}

const doesSpreadsheetExists = () => {
  const { spreadsheetId } = JSON.parse(localStorage.getItem("spreadsheet")) || {}

  if (spreadsheetId) {
    window.gapi.client.sheets.spreadsheets
      .get({ spreadsheetId })
      .then(
        response => {
          console.log(response.result)
        },
        reason => {
          if (reason.status == 404) {
            localStorage.removeItem("spreadsheet")
          }
          console.error(`error: ${reason.result.error.message}`)
        }
      )
  }
}

const exportEvents = () => {
  const spreadsheet = JSON.parse(localStorage.getItem("spreadsheet")) || {}
  const spreadsheetBody = insertEvents()

  if (spreadsheet.spreadsheetId) {
    window.gapi.client.sheets.spreadsheets.values
      .batchUpdate(
        { spreadsheetId: spreadsheet.spreadsheetId },
        {
          valueInputOption: "USER_ENTERED",
          data: [
            {
              range: `'${spreadsheet.sheets[0].properties.title}'`,
              majorDimension: "ROWS",
              values: spreadsheetBody.sheets[0].data[0].rowData.map(data =>
                data.values.map(
                  value =>
                    value.userEnteredValue.stringValue ||
                    value.userEnteredValue.numberValue
                )
              )
            }
          ]
        }
      )
      .then(
        function(response) {
          console.log("HERE", response)
        },
        function(reason) {
          console.error("error: " + reason.result.error.message)
        }
      )
  } else {
    window.gapi.client.sheets.spreadsheets.create({}, spreadsheetBody).then(
      response => {
        localStorage.setItem("spreadsheet", JSON.stringify(response.result))
      },
      reason => {
        console.error("error: " + reason.result.error.message)
      }
    )
  }
}

export default () => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    loadScript(
      document,
      "script",
      "google-login",
      "https://apis.google.com/js/api.js",
      () => {
        window.gapi.load("client:auth2", initClient)
      }
    )
  }, [])

  return (
    <div style={{ marginLeft: "auto" }}>
      {info.profileObj && (
        <div>
          {info.profileObj.email}
          <button
            onClick={() => {
              const request = window.window.gapi.client.sheets.spreadsheets.create(
                {},
                {}
              )
              request.then(
                response => {
                  console.log(response.result)
                },
                reason => {
                  console.error("error: " + reason.result.error.message)
                }
              )
            }}
          >
            export
          </button>
        </div>
      )}
      {!info.profileObj && (
        <button className="link" onClick={handleSignInClick}>
          Exporter les données
        </button>
      )}
    </div>
  )
}
