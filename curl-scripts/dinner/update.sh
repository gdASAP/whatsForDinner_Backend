#!/bin/bash

API="http://localhost:4741"
URL_PATH="/dinner"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dinner": {
      "name": "'"${NAME}"'",
      "timeToPrepare": "'"${TIMETOPREPARE}"'"
    }
  }'

echo
