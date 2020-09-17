#!/bin/bash

API="http://localhost:4741"
URL_PATH="/dinner"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dinner": {
      "name": "'"${DINNER}"'",
      "timeToPrepare": "'"${TIMETOPREPARE}"'"
    }
  }'

echo
